import type { CompanyTicker } from '@/types'

/**
 * Data Normalizer Utilities
 *
 * Handles messy data from Google Sheets:
 * - Quarter strings in various formats
 * - Currency values with commas, $, etc.
 * - Company name/ticker variations
 */

// Quarter normalization
const QUARTER_PATTERNS = [
  /^Q([1-4])\s*['"]?(\d{2,4})$/i, // Q1 2024, Q1'24, Q1 '24
  /^([1-4])Q\s*(\d{2,4})$/i, // 1Q2024, 1Q 24
  /^(\d{2,4})\s*Q([1-4])$/i, // 2024Q1, 24 Q1
  /^(\d{2,4})-Q([1-4])$/i, // 2024-Q1
]

export function normalizeQuarter(input: string): string | null {
  if (!input || typeof input !== 'string') return null

  const trimmed = input.trim()

  for (let i = 0; i < QUARTER_PATTERNS.length; i++) {
    const pattern = QUARTER_PATTERNS[i]
    if (!pattern) continue

    const match = trimmed.match(pattern)
    if (match && match[1] && match[2]) {
      let quarter: string
      let year: string

      // Patterns 0 and 1: Q1 2024 format (quarter first)
      // Patterns 2 and 3: 2024 Q1 format (year first)
      if (i <= 1) {
        quarter = match[1]
        year = match[2]
      } else {
        year = match[1]
        quarter = match[2]
      }

      // Normalize year to 4 digits
      if (year.length === 2) {
        year = `20${year}`
      }

      return `Q${quarter} ${year}`
    }
  }

  return null
}

export function parseQuarter(quarterStr: string): { year: number; quarter: number } | null {
  const normalized = normalizeQuarter(quarterStr) || quarterStr
  const match = normalized.match(/Q(\d)\s+(\d{4})/)

  if (match && match[1] && match[2]) {
    return {
      quarter: parseInt(match[1], 10),
      year: parseInt(match[2], 10),
    }
  }

  return null
}

export function compareQuarters(a: string, b: string): number {
  const parsedA = parseQuarter(a)
  const parsedB = parseQuarter(b)

  if (!parsedA || !parsedB) return 0

  if (parsedA.year !== parsedB.year) {
    return parsedA.year - parsedB.year
  }

  return parsedA.quarter - parsedB.quarter
}

// Currency/Number normalization
export function parseNumber(input: string | number): number | null {
  if (typeof input === 'number') return input
  if (!input || typeof input !== 'string') return null

  // Remove currency symbols, commas, spaces, and other non-numeric chars (except . and -)
  const cleaned = input.replace(/[$€£,\s]/g, '').replace(/[^\d.\-]/g, '')

  const parsed = parseFloat(cleaned)
  return isNaN(parsed) ? null : parsed
}

export function parseBillions(input: string | number): number | null {
  const num = parseNumber(input)
  if (num === null) return null

  // If the number is already in billions format (e.g., 38.52), return as is
  // If it's in raw format (e.g., 38520000000), convert to billions
  if (Math.abs(num) > 1000) {
    return num / 1_000_000_000
  }

  return num
}

// Company ticker normalization
const TICKER_MAP: Record<string, CompanyTicker> = {
  // Standard tickers
  AAPL: 'AAPL',
  META: 'META',
  MSFT: 'MSFT',
  GOOG: 'GOOG',
  GOOGL: 'GOOG',
  AMZN: 'AMZN',
  NVDA: 'NVDA',
  TSLA: 'TSLA',

  // Common names
  APPLE: 'AAPL',
  FACEBOOK: 'META',
  MICROSOFT: 'MSFT',
  GOOGLE: 'GOOG',
  ALPHABET: 'GOOG',
  AMAZON: 'AMZN',
  NVIDIA: 'NVDA',
  TESLA: 'TSLA',
}

export function normalizeTicker(input: string): CompanyTicker | null {
  if (!input || typeof input !== 'string') return null

  const normalized = input.trim().toUpperCase().replace(/[^A-Z]/g, '')

  return TICKER_MAP[normalized] || null
}

// Percentage normalization
export function parsePercentage(input: string | number): number | null {
  if (typeof input === 'number') return input

  if (!input || typeof input !== 'string') return null

  // Remove % symbol and parse
  const cleaned = input.replace(/%/g, '').trim()
  const parsed = parseFloat(cleaned)

  return isNaN(parsed) ? null : parsed
}

// Format numbers for display
export function formatBillions(value: number, decimals = 2): string {
  return `${value.toFixed(decimals)}`
}

export function formatPercentage(value: number, decimals = 2): string {
  const sign = value >= 0 ? '+' : ''
  return `${sign}${value.toFixed(decimals)}%`
}

export function formatCurrency(value: number, decimals = 2): string {
  return `$${value.toFixed(decimals)}B`
}
