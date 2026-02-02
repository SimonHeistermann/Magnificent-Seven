// Company Types
export type CompanyTicker = 'AAPL' | 'META' | 'MSFT' | 'GOOG' | 'AMZN' | 'NVDA' | 'TSLA'

export interface Company {
  ticker: CompanyTicker
  name: string
  displayName: string
  logoKey: string
  color: string
}

// Financial Data Types
export interface QuarterlyData {
  quarter: string // Format: "Q1 2024"
  year: number
  quarterNumber: number
  revenue: number // In billions USD
  netIncome: number // In billions USD
  grossMargin: number // Percentage (0-100)
}

export interface CompanyFinancialData {
  ticker: CompanyTicker
  quarterlyData: QuarterlyData[]
}

// Computed/Derived Types
export interface CurrentRevenueData {
  ticker: CompanyTicker
  company: Company
  quarter: string
  revenue: number
  absoluteChange: number
  percentageChange: number
}

export interface TTMData {
  ticker: CompanyTicker
  company: Company
  ttmRevenue: number
  ttmNetIncome: number
  latestQuarter: string
}

export interface YoYGrowthData {
  ticker: CompanyTicker
  company: Company
  quarters: {
    quarter: string
    growth: number // Percentage
  }[]
}

export interface PerformanceLeaderData {
  best: {
    ticker: CompanyTicker
    company: Company
    growth: number
    quarter: string
  } | null
  worst: {
    ticker: CompanyTicker
    company: Company
    growth: number
    quarter: string
  } | null
  average: number
}

// Dashboard State Types
export interface DashboardState {
  companies: Company[]
  financialData: CompanyFinancialData[]
  selectedCompanies: CompanyTicker[]
  isLoading: boolean
  error: string | null
  lastUpdated: Date | null
}

// API Response Types (for Google Sheets)
export interface SheetRow {
  [key: string]: string
}

export interface SheetResponse {
  values: string[][]
  error?: string
}

// Chart Data Types
export interface LineChartDataPoint {
  quarter: string
  [ticker: string]: number | string
}

export interface BarChartDataPoint {
  ticker: CompanyTicker
  value: number
  label: string
}

export interface DonutChartDataPoint {
  ticker: CompanyTicker
  value: number
  name: string
  color: string
}
