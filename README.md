# Magnificent Seven Dashboard

A professional Vue 3 dashboard displaying financial metrics for the "Magnificent Seven" tech companies: Apple, Meta, Microsoft, Google (Alphabet), Amazon, Nvidia, and Tesla.

## Quick Start

```sh
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Tech Stack

- **Vue 3** with Composition API & TypeScript
- **Vite** for fast development and building
- **Pinia** for state management
- **Vue Router** for navigation (extensible)
- **ECharts** via vue-echarts for charts
- **Tailwind CSS v4** for styling

## Project Structure

```
src/
├── components/
│   ├── base/           # Base UI components (Card, Modal, Logo, etc.)
│   ├── charts/         # ECharts wrapper components
│   └── widgets/        # Business-specific widgets
├── constants/          # Company data, colors, API config
├── pages/              # Page components
├── services/           # Data fetching & Google Sheets integration
├── stores/             # Pinia stores
├── types/              # TypeScript interfaces
└── utils/              # Normalizers & utilities
```

## Key Files

| File | Description |
|------|-------------|
| `src/services/sheets.ts` | Google Sheets integration with caching and fallback |
| `src/services/mockData.ts` | Mock financial data for development |
| `src/stores/dashboard.ts` | Main Pinia store with computed metrics |
| `src/constants/companies.ts` | Company definitions (ticker, name, color) |
| `src/utils/normalizer.ts` | Data parsing utilities for messy sheet data |
| `src/pages/DashboardPage.vue` | Main dashboard layout |

## Data Source

The dashboard attempts to fetch data from Google Sheets and falls back to mock data.

### Current Setup (Development)
- Mock data is used automatically when Sheets access fails
- Mock data includes realistic quarterly financials from 2021-2024

### Production Setup

**Option 1: Publish Google Sheet to Web**
1. In Google Sheets: File > Share > Publish to Web
2. Select CSV format for the data sheet
3. The app will automatically fetch from the published URL

**Option 2: Backend Proxy (Recommended)**
1. Create a server endpoint that fetches sheet data
2. Use Google Sheets API v4 with API key
3. Update `GOOGLE_SHEETS` config in `src/constants/index.ts`

**Option 3: Service Account**
1. Create a Google Cloud service account
2. Share the sheet with the service account email
3. Implement server-side fetching with credentials

## Dashboard Widgets

1. **Revenue Cards** - Current quarter revenue with QoQ change
2. **Revenue Line Chart** - 3-year quarterly revenue trends
3. **Revenue Breakdown Donut** - TTM revenue distribution
4. **Net Income TTM Bar** - Trailing 12-month net income
5. **Gross Margin Bar** - Latest quarter gross margins
6. **Revenue Growth YoY** - Year-over-year growth by quarter

## Features

- Click any chart to open in **Focus View** (modal)
- Responsive design for different screen sizes
- Loading skeletons during data fetch
- Error state with retry option
- "Demo Data" badge when using mock data

## Customization

### Adding/Modifying Companies
Edit `src/constants/companies.ts`:
```typescript
export const COMPANIES: Record<CompanyTicker, Company> = {
  AAPL: {
    ticker: 'AAPL',
    name: 'Apple Inc.',
    displayName: 'Apple',
    logoKey: 'apple',
    color: '#A2AAAD',
  },
  // ...
}
```

### Styling
- Background gradient: `radial-gradient(ellipse at center, #011F35 0%, #020204 70%)`
- Card background: `#011F35`
- Accent color: `#00D4FF`
- Font: Rubik (Google Fonts)

## Build Commands

```sh
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # Lint code
npm run format   # Format code
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## TODO for Production

- [ ] Set up backend proxy for Google Sheets API
- [ ] Add API key authentication
- [ ] Implement data refresh scheduling
- [ ] Add company filter/toggle UI
- [ ] Add export functionality (PDF/CSV)
- [ ] Add more chart types as needed
