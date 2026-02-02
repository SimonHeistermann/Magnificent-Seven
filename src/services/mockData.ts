import type { CompanyFinancialData } from '@/types'

/**
 * Mock Data for Development and Fallback
 *
 * This data is used when:
 * 1. Google Sheets API is not accessible (auth issues, rate limits)
 * 2. During development without network access
 * 3. As a fallback when live data fetch fails
 *
 * Data is approximate and based on public financial reports.
 * Numbers are in billions USD.
 */

export const mockFinancialData: CompanyFinancialData[] = [
  {
    ticker: 'AAPL',
    quarterlyData: [
      // 2021
      { quarter: 'Q1 2021', year: 2021, quarterNumber: 1, revenue: 111.44, netIncome: 28.76, grossMargin: 39.8 },
      { quarter: 'Q2 2021', year: 2021, quarterNumber: 2, revenue: 89.58, netIncome: 23.63, grossMargin: 42.5 },
      { quarter: 'Q3 2021', year: 2021, quarterNumber: 3, revenue: 81.43, netIncome: 21.74, grossMargin: 43.3 },
      { quarter: 'Q4 2021', year: 2021, quarterNumber: 4, revenue: 83.36, netIncome: 20.55, grossMargin: 42.2 },
      // 2022
      { quarter: 'Q1 2022', year: 2022, quarterNumber: 1, revenue: 123.95, netIncome: 34.63, grossMargin: 43.8 },
      { quarter: 'Q2 2022', year: 2022, quarterNumber: 2, revenue: 97.28, netIncome: 25.01, grossMargin: 43.3 },
      { quarter: 'Q3 2022', year: 2022, quarterNumber: 3, revenue: 82.96, netIncome: 19.44, grossMargin: 42.3 },
      { quarter: 'Q4 2022', year: 2022, quarterNumber: 4, revenue: 90.15, netIncome: 20.72, grossMargin: 42.3 },
      // 2023
      { quarter: 'Q1 2023', year: 2023, quarterNumber: 1, revenue: 117.15, netIncome: 29.99, grossMargin: 44.3 },
      { quarter: 'Q2 2023', year: 2023, quarterNumber: 2, revenue: 94.84, netIncome: 24.16, grossMargin: 44.5 },
      { quarter: 'Q3 2023', year: 2023, quarterNumber: 3, revenue: 81.80, netIncome: 19.88, grossMargin: 44.1 },
      { quarter: 'Q4 2023', year: 2023, quarterNumber: 4, revenue: 89.50, netIncome: 22.96, grossMargin: 45.0 },
      // 2024
      { quarter: 'Q1 2024', year: 2024, quarterNumber: 1, revenue: 119.58, netIncome: 33.92, grossMargin: 46.6 },
      { quarter: 'Q2 2024', year: 2024, quarterNumber: 2, revenue: 85.78, netIncome: 21.45, grossMargin: 46.3 },
      { quarter: 'Q3 2024', year: 2024, quarterNumber: 3, revenue: 94.93, netIncome: 14.74, grossMargin: 46.2 },
    ],
  },
  {
    ticker: 'META',
    quarterlyData: [
      // 2021
      { quarter: 'Q1 2021', year: 2021, quarterNumber: 1, revenue: 26.17, netIncome: 9.50, grossMargin: 80.8 },
      { quarter: 'Q2 2021', year: 2021, quarterNumber: 2, revenue: 29.08, netIncome: 10.39, grossMargin: 81.0 },
      { quarter: 'Q3 2021', year: 2021, quarterNumber: 3, revenue: 29.01, netIncome: 9.19, grossMargin: 80.5 },
      { quarter: 'Q4 2021', year: 2021, quarterNumber: 4, revenue: 33.67, netIncome: 10.29, grossMargin: 80.3 },
      // 2022
      { quarter: 'Q1 2022', year: 2022, quarterNumber: 1, revenue: 27.91, netIncome: 7.47, grossMargin: 80.3 },
      { quarter: 'Q2 2022', year: 2022, quarterNumber: 2, revenue: 28.82, netIncome: 6.69, grossMargin: 79.6 },
      { quarter: 'Q3 2022', year: 2022, quarterNumber: 3, revenue: 27.71, netIncome: 4.40, grossMargin: 79.1 },
      { quarter: 'Q4 2022', year: 2022, quarterNumber: 4, revenue: 32.17, netIncome: 4.65, grossMargin: 78.4 },
      // 2023
      { quarter: 'Q1 2023', year: 2023, quarterNumber: 1, revenue: 28.65, netIncome: 5.71, grossMargin: 80.6 },
      { quarter: 'Q2 2023', year: 2023, quarterNumber: 2, revenue: 31.99, netIncome: 7.79, grossMargin: 81.0 },
      { quarter: 'Q3 2023', year: 2023, quarterNumber: 3, revenue: 34.15, netIncome: 11.58, grossMargin: 81.6 },
      { quarter: 'Q4 2023', year: 2023, quarterNumber: 4, revenue: 40.11, netIncome: 14.02, grossMargin: 81.5 },
      // 2024
      { quarter: 'Q1 2024', year: 2024, quarterNumber: 1, revenue: 36.46, netIncome: 12.37, grossMargin: 81.8 },
      { quarter: 'Q2 2024', year: 2024, quarterNumber: 2, revenue: 39.07, netIncome: 13.47, grossMargin: 81.5 },
      { quarter: 'Q3 2024', year: 2024, quarterNumber: 3, revenue: 40.59, netIncome: 15.69, grossMargin: 81.8 },
    ],
  },
  {
    ticker: 'MSFT',
    quarterlyData: [
      // 2021
      { quarter: 'Q1 2021', year: 2021, quarterNumber: 1, revenue: 41.71, netIncome: 15.46, grossMargin: 68.4 },
      { quarter: 'Q2 2021', year: 2021, quarterNumber: 2, revenue: 43.08, netIncome: 15.46, grossMargin: 68.3 },
      { quarter: 'Q3 2021', year: 2021, quarterNumber: 3, revenue: 46.15, netIncome: 16.46, grossMargin: 69.3 },
      { quarter: 'Q4 2021', year: 2021, quarterNumber: 4, revenue: 45.32, netIncome: 16.73, grossMargin: 69.2 },
      // 2022
      { quarter: 'Q1 2022', year: 2022, quarterNumber: 1, revenue: 51.73, netIncome: 18.77, grossMargin: 69.4 },
      { quarter: 'Q2 2022', year: 2022, quarterNumber: 2, revenue: 49.36, netIncome: 16.74, grossMargin: 68.0 },
      { quarter: 'Q3 2022', year: 2022, quarterNumber: 3, revenue: 50.12, netIncome: 17.56, grossMargin: 68.6 },
      { quarter: 'Q4 2022', year: 2022, quarterNumber: 4, revenue: 52.75, netIncome: 17.56, grossMargin: 68.3 },
      // 2023
      { quarter: 'Q1 2023', year: 2023, quarterNumber: 1, revenue: 52.86, netIncome: 16.43, grossMargin: 68.3 },
      { quarter: 'Q2 2023', year: 2023, quarterNumber: 2, revenue: 56.19, netIncome: 20.08, grossMargin: 69.5 },
      { quarter: 'Q3 2023', year: 2023, quarterNumber: 3, revenue: 56.52, netIncome: 22.29, grossMargin: 70.1 },
      { quarter: 'Q4 2023', year: 2023, quarterNumber: 4, revenue: 62.02, netIncome: 22.29, grossMargin: 70.0 },
      // 2024
      { quarter: 'Q1 2024', year: 2024, quarterNumber: 1, revenue: 61.86, netIncome: 21.94, grossMargin: 69.4 },
      { quarter: 'Q2 2024', year: 2024, quarterNumber: 2, revenue: 64.73, netIncome: 22.04, grossMargin: 69.9 },
      { quarter: 'Q3 2024', year: 2024, quarterNumber: 3, revenue: 65.59, netIncome: 24.67, grossMargin: 69.4 },
    ],
  },
  {
    ticker: 'GOOG',
    quarterlyData: [
      // 2021
      { quarter: 'Q1 2021', year: 2021, quarterNumber: 1, revenue: 55.31, netIncome: 17.93, grossMargin: 56.5 },
      { quarter: 'Q2 2021', year: 2021, quarterNumber: 2, revenue: 61.88, netIncome: 18.53, grossMargin: 57.0 },
      { quarter: 'Q3 2021', year: 2021, quarterNumber: 3, revenue: 65.12, netIncome: 18.94, grossMargin: 56.8 },
      { quarter: 'Q4 2021', year: 2021, quarterNumber: 4, revenue: 75.33, netIncome: 20.64, grossMargin: 56.9 },
      // 2022
      { quarter: 'Q1 2022', year: 2022, quarterNumber: 1, revenue: 68.01, netIncome: 16.44, grossMargin: 55.4 },
      { quarter: 'Q2 2022', year: 2022, quarterNumber: 2, revenue: 69.69, netIncome: 16.00, grossMargin: 55.4 },
      { quarter: 'Q3 2022', year: 2022, quarterNumber: 3, revenue: 69.09, netIncome: 13.91, grossMargin: 54.5 },
      { quarter: 'Q4 2022', year: 2022, quarterNumber: 4, revenue: 76.05, netIncome: 13.62, grossMargin: 54.4 },
      // 2023
      { quarter: 'Q1 2023', year: 2023, quarterNumber: 1, revenue: 69.79, netIncome: 15.05, grossMargin: 55.0 },
      { quarter: 'Q2 2023', year: 2023, quarterNumber: 2, revenue: 74.60, netIncome: 18.37, grossMargin: 56.1 },
      { quarter: 'Q3 2023', year: 2023, quarterNumber: 3, revenue: 76.69, netIncome: 19.69, grossMargin: 56.7 },
      { quarter: 'Q4 2023', year: 2023, quarterNumber: 4, revenue: 86.31, netIncome: 20.69, grossMargin: 57.0 },
      // 2024
      { quarter: 'Q1 2024', year: 2024, quarterNumber: 1, revenue: 80.54, netIncome: 23.66, grossMargin: 57.5 },
      { quarter: 'Q2 2024', year: 2024, quarterNumber: 2, revenue: 84.74, netIncome: 23.62, grossMargin: 57.7 },
      { quarter: 'Q3 2024', year: 2024, quarterNumber: 3, revenue: 88.27, netIncome: 26.30, grossMargin: 58.3 },
    ],
  },
  {
    ticker: 'AMZN',
    quarterlyData: [
      // 2021
      { quarter: 'Q1 2021', year: 2021, quarterNumber: 1, revenue: 108.52, netIncome: 8.11, grossMargin: 42.0 },
      { quarter: 'Q2 2021', year: 2021, quarterNumber: 2, revenue: 113.08, netIncome: 7.78, grossMargin: 42.2 },
      { quarter: 'Q3 2021', year: 2021, quarterNumber: 3, revenue: 110.81, netIncome: 3.16, grossMargin: 41.0 },
      { quarter: 'Q4 2021', year: 2021, quarterNumber: 4, revenue: 137.41, netIncome: 14.32, grossMargin: 42.0 },
      // 2022
      { quarter: 'Q1 2022', year: 2022, quarterNumber: 1, revenue: 116.44, netIncome: -3.84, grossMargin: 42.6 },
      { quarter: 'Q2 2022', year: 2022, quarterNumber: 2, revenue: 121.23, netIncome: -2.03, grossMargin: 43.2 },
      { quarter: 'Q3 2022', year: 2022, quarterNumber: 3, revenue: 127.10, netIncome: 2.87, grossMargin: 43.5 },
      { quarter: 'Q4 2022', year: 2022, quarterNumber: 4, revenue: 149.20, netIncome: 0.28, grossMargin: 42.4 },
      // 2023
      { quarter: 'Q1 2023', year: 2023, quarterNumber: 1, revenue: 127.36, netIncome: 3.17, grossMargin: 44.3 },
      { quarter: 'Q2 2023', year: 2023, quarterNumber: 2, revenue: 134.38, netIncome: 6.75, grossMargin: 46.2 },
      { quarter: 'Q3 2023', year: 2023, quarterNumber: 3, revenue: 143.08, netIncome: 9.88, grossMargin: 46.8 },
      { quarter: 'Q4 2023', year: 2023, quarterNumber: 4, revenue: 170.00, netIncome: 10.62, grossMargin: 47.0 },
      // 2024
      { quarter: 'Q1 2024', year: 2024, quarterNumber: 1, revenue: 143.31, netIncome: 10.43, grossMargin: 47.5 },
      { quarter: 'Q2 2024', year: 2024, quarterNumber: 2, revenue: 148.00, netIncome: 13.49, grossMargin: 48.0 },
      { quarter: 'Q3 2024', year: 2024, quarterNumber: 3, revenue: 158.88, netIncome: 15.33, grossMargin: 48.6 },
    ],
  },
  {
    ticker: 'NVDA',
    quarterlyData: [
      // 2021
      { quarter: 'Q1 2021', year: 2021, quarterNumber: 1, revenue: 5.66, netIncome: 1.91, grossMargin: 64.1 },
      { quarter: 'Q2 2021', year: 2021, quarterNumber: 2, revenue: 6.51, netIncome: 2.37, grossMargin: 64.8 },
      { quarter: 'Q3 2021', year: 2021, quarterNumber: 3, revenue: 7.10, netIncome: 2.46, grossMargin: 65.2 },
      { quarter: 'Q4 2021', year: 2021, quarterNumber: 4, revenue: 7.64, netIncome: 3.00, grossMargin: 65.4 },
      // 2022
      { quarter: 'Q1 2022', year: 2022, quarterNumber: 1, revenue: 8.29, netIncome: 1.62, grossMargin: 65.5 },
      { quarter: 'Q2 2022', year: 2022, quarterNumber: 2, revenue: 6.70, netIncome: 0.66, grossMargin: 43.5 },
      { quarter: 'Q3 2022', year: 2022, quarterNumber: 3, revenue: 5.93, netIncome: 0.68, grossMargin: 53.6 },
      { quarter: 'Q4 2022', year: 2022, quarterNumber: 4, revenue: 6.05, netIncome: 1.41, grossMargin: 63.3 },
      // 2023
      { quarter: 'Q1 2023', year: 2023, quarterNumber: 1, revenue: 7.19, netIncome: 2.04, grossMargin: 64.6 },
      { quarter: 'Q2 2023', year: 2023, quarterNumber: 2, revenue: 13.51, netIncome: 6.19, grossMargin: 70.1 },
      { quarter: 'Q3 2023', year: 2023, quarterNumber: 3, revenue: 18.12, netIncome: 9.24, grossMargin: 74.0 },
      { quarter: 'Q4 2023', year: 2023, quarterNumber: 4, revenue: 22.10, netIncome: 12.29, grossMargin: 76.0 },
      // 2024
      { quarter: 'Q1 2024', year: 2024, quarterNumber: 1, revenue: 26.04, netIncome: 14.88, grossMargin: 78.4 },
      { quarter: 'Q2 2024', year: 2024, quarterNumber: 2, revenue: 30.04, netIncome: 16.60, grossMargin: 75.1 },
      { quarter: 'Q3 2024', year: 2024, quarterNumber: 3, revenue: 35.08, netIncome: 19.31, grossMargin: 74.6 },
    ],
  },
  {
    ticker: 'TSLA',
    quarterlyData: [
      // 2021
      { quarter: 'Q1 2021', year: 2021, quarterNumber: 1, revenue: 10.39, netIncome: 0.44, grossMargin: 21.0 },
      { quarter: 'Q2 2021', year: 2021, quarterNumber: 2, revenue: 11.96, netIncome: 1.14, grossMargin: 24.1 },
      { quarter: 'Q3 2021', year: 2021, quarterNumber: 3, revenue: 13.76, netIncome: 1.62, grossMargin: 26.6 },
      { quarter: 'Q4 2021', year: 2021, quarterNumber: 4, revenue: 17.72, netIncome: 2.32, grossMargin: 27.4 },
      // 2022
      { quarter: 'Q1 2022', year: 2022, quarterNumber: 1, revenue: 18.76, netIncome: 3.32, grossMargin: 29.1 },
      { quarter: 'Q2 2022', year: 2022, quarterNumber: 2, revenue: 16.93, netIncome: 2.26, grossMargin: 27.2 },
      { quarter: 'Q3 2022', year: 2022, quarterNumber: 3, revenue: 21.45, netIncome: 3.29, grossMargin: 27.9 },
      { quarter: 'Q4 2022', year: 2022, quarterNumber: 4, revenue: 24.32, netIncome: 3.69, grossMargin: 25.9 },
      // 2023
      { quarter: 'Q1 2023', year: 2023, quarterNumber: 1, revenue: 23.33, netIncome: 2.51, grossMargin: 19.3 },
      { quarter: 'Q2 2023', year: 2023, quarterNumber: 2, revenue: 24.93, netIncome: 2.70, grossMargin: 18.2 },
      { quarter: 'Q3 2023', year: 2023, quarterNumber: 3, revenue: 23.35, netIncome: 1.85, grossMargin: 17.9 },
      { quarter: 'Q4 2023', year: 2023, quarterNumber: 4, revenue: 25.17, netIncome: 2.06, grossMargin: 17.6 },
      // 2024
      { quarter: 'Q1 2024', year: 2024, quarterNumber: 1, revenue: 21.30, netIncome: 1.13, grossMargin: 17.4 },
      { quarter: 'Q2 2024', year: 2024, quarterNumber: 2, revenue: 25.50, netIncome: 1.48, grossMargin: 18.0 },
      { quarter: 'Q3 2024', year: 2024, quarterNumber: 3, revenue: 25.18, netIncome: 2.17, grossMargin: 19.8 },
    ],
  },
]
