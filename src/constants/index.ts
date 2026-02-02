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
  SPREADSHEET_ID: '1wx-yoq72MjaVWmzpYX9hgNNnU9A9_AgZ6rNpzgZUMGg',

  // Published CSV URL (direct access without auth)
  PUBLISHED_CSV_URL:
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vRPsZCZ4pBpDjdCyEpYDvXzJcklqIIJW9pNtOYtTJwaa-vOZ2UllFjKmVxDlh8gbjNhdkOcpyvRXBo2/pub?output=csv',

  // Sheet GIDs (for fallback methods)
  DATA_GID: '2097954137',
  OVERVIEW_GID: '2097954137',

  // CSV Export URL template (requires sheet to be shared publicly)
  getCSVUrl: (gid: string) =>
    `https://docs.google.com/spreadsheets/d/1wx-yoq72MjaVWmzpYX9hgNNnU9A9_AgZ6rNpzgZUMGg/export?format=csv&gid=${gid}`,

  // Google Visualization API URL
  getVisualizationUrl: (gid: string) =>
    `https://docs.google.com/spreadsheets/d/1wx-yoq72MjaVWmzpYX9hgNNnU9A9_AgZ6rNpzgZUMGg/gviz/tq?tqx=out:json&gid=${gid}`,
}

// Cache duration in milliseconds (5 minutes)
export const CACHE_DURATION = 5 * 60 * 1000
