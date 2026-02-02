export * from './companies'

// Chart colors - gradient from dark to light for YoY comparison
export const QUARTER_COLORS = {
  current: '#00D4FF',
  previous1: '#00A4D4',
  previous2: '#0074A8',
  previous3: '#00447C',
}

// UI Constants
export const CARD_BACKGROUND = '#011F35'
export const BACKGROUND_GRADIENT = 'radial-gradient(ellipse at center, #011F35 0%, #020204 70%)'

// Number formatting
export const BILLION = 1_000_000_000
export const MILLION = 1_000_000

// API Configuration
export const GOOGLE_SHEETS = {
  // Main data sheet
  SPREADSHEET_ID: '1m3h9Xce3SRMaq20li2Qg4HuSZowwxQSd9FkQmeuI7Dw',

  // Sheet GIDs
  DATA_GID: '244946188',
  OVERVIEW_GID: '2097954137',

  // CSV Export URL template
  // TODO: For production, use a backend proxy to handle authentication
  // or publish the sheet to web as CSV
  getCSVUrl: (gid: string) =>
    `https://docs.google.com/spreadsheets/d/1m3h9Xce3SRMaq20li2Qg4HuSZowwxQSd9FkQmeuI7Dw/export?format=csv&gid=${gid}`,

  // Google Visualization API URL
  // Allows querying public sheets without auth
  getVisualizationUrl: (gid: string) =>
    `https://docs.google.com/spreadsheets/d/1m3h9Xce3SRMaq20li2Qg4HuSZowwxQSd9FkQmeuI7Dw/gviz/tq?tqx=out:json&gid=${gid}`,
}

// Cache duration in milliseconds (5 minutes)
export const CACHE_DURATION = 5 * 60 * 1000
