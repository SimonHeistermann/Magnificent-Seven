import type { CompanyFinancialData, CompanyTicker, QuarterlyData } from '@/types'
import { GOOGLE_SHEETS, CACHE_DURATION } from '@/constants'
import { normalizeQuarter, parseNumber, normalizeTicker } from '@/utils/normalizer'
import { mockFinancialData } from './mockData'

/**
 * Google Sheets Data Service
 *
 * Handles fetching financial data from Google Sheets with:
 * - Multiple fetch strategies (CSV export, Visualization API)
 * - In-memory caching
 * - Automatic fallback to mock data
 *
 * TODO: Production Setup
 * ----------------------
 * 1. Backend Proxy: Create a server endpoint that fetches the sheet data
 *    with proper authentication (API key or service account)
 *
 * 2. Publish to Web: In Google Sheets, File > Share > Publish to Web
 *    Select CSV format - this makes the sheet publicly accessible
 *
 * 3. API Key: Use Google Sheets API v4 with an API key:
 *    GET https://sheets.googleapis.com/v4/spreadsheets/{id}/values/{range}?key={API_KEY}
 *
 * 4. Service Account: For sensitive data, use a service account with
 *    the sheet shared to the service account email
 */

interface CacheEntry<T> {
  data: T
  timestamp: number
}

class SheetsService {
  private cache: Map<string, CacheEntry<CompanyFinancialData[]>> = new Map()
  private useMockData = false

  /**
   * Get financial data for all companies
   * Tries live data first, falls back to mock data
   */
  async getFinancialData(): Promise<CompanyFinancialData[]> {
    const cacheKey = 'financial-data'
    const cached = this.cache.get(cacheKey)

    // Return cached data if valid
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
      console.log('[SheetsService] Returning cached data')
      return cached.data
    }

    // Try to fetch live data
    if (!this.useMockData) {
      try {
        const data = await this.fetchLiveData()
        if (data && data.length > 0) {
          this.cache.set(cacheKey, { data, timestamp: Date.now() })
          console.log('[SheetsService] Fetched live data successfully')
          return data
        }
      } catch (error) {
        console.warn('[SheetsService] Failed to fetch live data:', error)
        this.useMockData = true
      }
    }

    // Fallback to mock data
    console.log('[SheetsService] Using mock data')
    this.cache.set(cacheKey, { data: mockFinancialData, timestamp: Date.now() })
    return mockFinancialData
  }

  /**
   * Force refresh data (bypass cache)
   */
  async refreshData(): Promise<CompanyFinancialData[]> {
    this.cache.clear()
    this.useMockData = false
    return this.getFinancialData()
  }

  /**
   * Check if using mock data
   */
  isUsingMockData(): boolean {
    return this.useMockData
  }

  /**
   * Fetch live data from Google Sheets
   */
  private async fetchLiveData(): Promise<CompanyFinancialData[]> {
    // Strategy 1: Try CSV export (works for published sheets)
    try {
      return await this.fetchFromCSV()
    } catch (error) {
      console.warn('[SheetsService] CSV fetch failed:', error)
    }

    // Strategy 2: Try Google Visualization API (works for public sheets)
    try {
      return await this.fetchFromVisualizationAPI()
    } catch (error) {
      console.warn('[SheetsService] Visualization API fetch failed:', error)
    }

    throw new Error('All fetch strategies failed')
  }

  /**
   * Fetch data via CSV export URL
   */
  private async fetchFromCSV(): Promise<CompanyFinancialData[]> {
    const url = GOOGLE_SHEETS.getCSVUrl(GOOGLE_SHEETS.DATA_GID)
    const response = await fetch(url, {
      mode: 'cors',
      headers: {
        Accept: 'text/csv',
      },
    })

    if (!response.ok) {
      throw new Error(`CSV fetch failed: ${response.status}`)
    }

    const csvText = await response.text()
    return this.parseCSV(csvText)
  }

  /**
   * Fetch data via Google Visualization API
   */
  private async fetchFromVisualizationAPI(): Promise<CompanyFinancialData[]> {
    const url = GOOGLE_SHEETS.getVisualizationUrl(GOOGLE_SHEETS.DATA_GID)
    const response = await fetch(url, { mode: 'cors' })

    if (!response.ok) {
      throw new Error(`Visualization API fetch failed: ${response.status}`)
    }

    const text = await response.text()
    // Response is JSONP: google.visualization.Query.setResponse({...})
    const jsonMatch = text.match(/google\.visualization\.Query\.setResponse\(([\s\S]*)\);?$/)

    if (!jsonMatch) {
      throw new Error('Invalid Visualization API response format')
    }

    const data = JSON.parse(jsonMatch[1] ?? '{}')
    return this.parseVisualizationResponse(data)
  }

  /**
   * Parse CSV data into CompanyFinancialData
   */
  private parseCSV(csvText: string): CompanyFinancialData[] {
    const lines = csvText.split('\n').filter((line) => line.trim())
    if (lines.length < 2) {
      throw new Error('CSV has no data rows')
    }

    const firstLine = lines[0]
    if (!firstLine) {
      throw new Error('CSV has no header row')
    }
    const headers = firstLine.split(',').map((h) => h.trim().toLowerCase())
    const companyDataMap = new Map<CompanyTicker, QuarterlyData[]>()

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i]
      if (!line) continue
      const values = this.parseCSVLine(line)
      const rowData = this.mapRowToData(headers, values)

      if (rowData) {
        const { ticker, quarterlyData } = rowData
        if (!companyDataMap.has(ticker)) {
          companyDataMap.set(ticker, [])
        }
        companyDataMap.get(ticker)!.push(quarterlyData)
      }
    }

    return Array.from(companyDataMap.entries()).map(([ticker, quarterlyData]) => ({
      ticker,
      quarterlyData: quarterlyData.sort((a, b) => {
        if (a.year !== b.year) return a.year - b.year
        return a.quarterNumber - b.quarterNumber
      }),
    }))
  }

  /**
   * Parse a single CSV line (handling quoted values)
   */
  private parseCSVLine(line: string): string[] {
    const values: string[] = []
    let current = ''
    let inQuotes = false

    for (const char of line) {
      if (char === '"') {
        inQuotes = !inQuotes
      } else if (char === ',' && !inQuotes) {
        values.push(current.trim())
        current = ''
      } else {
        current += char
      }
    }
    values.push(current.trim())

    return values
  }

  /**
   * Map a row to typed data
   */
  private mapRowToData(
    headers: string[],
    values: string[],
  ): { ticker: CompanyTicker; quarterlyData: QuarterlyData } | null {
    const getValue = (key: string): string | undefined => {
      const index = headers.findIndex(
        (h) => h.includes(key.toLowerCase()) || h === key.toLowerCase(),
      )
      return index >= 0 ? values[index] : undefined
    }

    // Find ticker/company column
    const tickerValue =
      getValue('ticker') || getValue('symbol') || getValue('company') || getValue('stock')
    const ticker = tickerValue ? normalizeTicker(tickerValue) : null

    if (!ticker) return null

    // Find quarter column
    const quarterValue = getValue('quarter') || getValue('period') || getValue('date')
    const normalizedQuarter = quarterValue ? normalizeQuarter(quarterValue) : null

    if (!normalizedQuarter) return null

    // Parse quarter info
    const quarterMatch = normalizedQuarter.match(/Q(\d)\s+(\d{4})/)
    if (!quarterMatch) return null

    const quarterNumber = parseInt(quarterMatch[1] ?? '0', 10)
    const year = parseInt(quarterMatch[2] ?? '0', 10)

    // Parse financial values
    const revenue = parseNumber(getValue('revenue') || getValue('total revenue') || '0')
    const netIncome = parseNumber(
      getValue('net income') || getValue('netincome') || getValue('profit') || '0',
    )
    const grossMargin = parseNumber(
      getValue('gross margin') || getValue('grossmargin') || getValue('gm') || '0',
    )

    return {
      ticker,
      quarterlyData: {
        quarter: normalizedQuarter,
        year,
        quarterNumber,
        revenue: revenue || 0,
        netIncome: netIncome || 0,
        grossMargin: grossMargin || 0,
      },
    }
  }

  /**
   * Parse Google Visualization API response
   */
  private parseVisualizationResponse(data: {
    table: {
      cols: { label: string }[]
      rows: { c: ({ v: string | number | null } | null)[] }[]
    }
  }): CompanyFinancialData[] {
    const { cols, rows } = data.table
    const headers = cols.map((col) => col.label.toLowerCase())
    const companyDataMap = new Map<CompanyTicker, QuarterlyData[]>()

    for (const row of rows) {
      const values = row.c.map((cell) => (cell?.v ?? '').toString())
      const rowData = this.mapRowToData(headers, values)

      if (rowData) {
        const { ticker, quarterlyData } = rowData
        if (!companyDataMap.has(ticker)) {
          companyDataMap.set(ticker, [])
        }
        companyDataMap.get(ticker)!.push(quarterlyData)
      }
    }

    return Array.from(companyDataMap.entries()).map(([ticker, quarterlyData]) => ({
      ticker,
      quarterlyData: quarterlyData.sort((a, b) => {
        if (a.year !== b.year) return a.year - b.year
        return a.quarterNumber - b.quarterNumber
      }),
    }))
  }
}

// Export singleton instance
export const sheetsService = new SheetsService()

// Export helper functions
export async function getFinancialData(): Promise<CompanyFinancialData[]> {
  return sheetsService.getFinancialData()
}

export async function refreshFinancialData(): Promise<CompanyFinancialData[]> {
  return sheetsService.refreshData()
}

export function isUsingMockData(): boolean {
  return sheetsService.isUsingMockData()
}
