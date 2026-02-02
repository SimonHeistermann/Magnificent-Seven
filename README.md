# Magnificent Seven Dashboard

A premium, production-ready financial dashboard displaying quarterly metrics for the "Magnificent Seven" tech giants: Apple, Microsoft, Google (Alphabet), Amazon, Meta, Nvidia, and Tesla.

![Vue.js](https://img.shields.io/badge/Vue.js-3.5-4FC08D?style=flat-square&logo=vue.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=flat-square&logo=vite&logoColor=white)

---

## Features

- **Real Financial Data** — Fetches quarterly earnings from Google Sheets (with intelligent fallback to demo data)
- **6 Interactive Charts** — Revenue trends, TTM breakdown, net income, gross margins, YoY growth, and performance leaders
- **Focus View** — Click any chart to expand into a detailed modal view
- **Responsive Design** — Optimized for desktop, tablet, and mobile devices
- **Premium Dark Theme** — Glassmorphism design with smooth animations
- **Company Logos** — High-quality PNG icons for all seven companies
- **Loading States** — Elegant skeleton loaders during data fetch
- **Error Handling** — Graceful fallback with retry functionality

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **Vue 3** | UI framework with Composition API |
| **TypeScript** | Type-safe development |
| **Vite** | Lightning-fast build tool |
| **Pinia** | State management |
| **Vue Router** | Client-side routing (hash mode for static hosting) |
| **ECharts** | Professional charting library |
| **Tailwind CSS v4** | Utility-first styling |

---

## Quick Start

### Prerequisites

- **Node.js** 20.19+ or 22.12+
- **npm** 10+

### Development

```bash
# Clone the repository
git clone https://github.com/SimonHeistermann/Magnificent-Seven.git
cd Magnificent-Seven

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Build for Production

```bash
# Create optimized production build
npm run build

# Preview the production build locally
npm run preview
```

The build output will be in the `dist/` folder.

---

## Deployment to FTP Server

This project is optimized for static hosting on any FTP server. Follow these steps:

Website: [magnificent-seven.projects.simon-heistermann.de](https://magnificent-seven.projects.simon-heistermann.de)

### Step 1: Build the Project

```bash
npm run build
```

This creates a `dist/` folder containing all files needed for deployment.

### Step 2: Upload to FTP

Upload the **contents** of the `dist/` folder to your FTP server:

```
dist/
├── index.html          → Upload to root
├── assets/             → Upload entire folder
│   ├── *.js
│   ├── *.css
│   └── ...
├── fonts/              → Upload entire folder
│   └── *.woff2
└── icons/              → Upload entire folder
    └── *.png
```

### Step 3: Verify

Your site should be live at your domain. The URLs will use hash routing:
- `https://yourdomain.com/` → Dashboard
- `https://yourdomain.com/#/legal-notice` → Legal Notice
- `https://yourdomain.com/#/privacy` → Privacy Policy

### FTP Upload with FileZilla (Example)

1. Open FileZilla and connect to your server
2. Navigate to your web root (usually `public_html/` or `www/`)
3. Select all files inside your local `dist/` folder
4. Drag and drop to the server
5. Wait for upload to complete
6. Visit your domain to verify

### Important Notes

- **No server configuration required** — Uses hash-based routing (`#/route`)
- **Works on any static host** — Apache, Nginx, shared hosting, GitHub Pages, Netlify, etc.
- **All assets are relative** — No base URL configuration needed

---

## Project Structure

```
src/
├── assets/
│   ├── fonts.css           # Local Rubik font definitions
│   └── main.css            # Global styles & Tailwind config
├── components/
│   ├── base/               # Reusable UI components
│   │   ├── CompanyLogo.vue # Company PNG icons
│   │   ├── DashboardCard.vue
│   │   ├── ErrorState.vue
│   │   ├── FocusModal.vue
│   │   ├── SiteFooter.vue
│   │   └── SkeletonLoader.vue
│   ├── charts/             # ECharts wrapper components
│   │   ├── RevenueLineChart.vue
│   │   ├── RevenueDonutChart.vue
│   │   ├── NetIncomeBarChart.vue
│   │   ├── GrossMarginBarChart.vue
│   │   ├── RevenueGrowthChart.vue
│   │   └── PerformanceLeadersCard.vue
│   └── widgets/            # Dashboard widgets
│       ├── DataSourceCard.vue
│       ├── RevenueCard.vue
│       └── RevenueCardsRow.vue
├── constants/
│   ├── companies.ts        # Company definitions (ticker, name, color)
│   └── index.ts            # API config, colors, constants
├── pages/
│   ├── DashboardPage.vue   # Main dashboard
│   ├── LegalNoticePage.vue # Legal notice / Impressum
│   └── PrivacyPage.vue     # Privacy policy
├── router/
│   └── index.ts            # Vue Router configuration
├── services/
│   ├── sheets.ts           # Google Sheets data fetching
│   └── mockData.ts         # Fallback demo data
├── stores/
│   └── dashboard.ts        # Pinia store with computed metrics
├── types/
│   └── index.ts            # TypeScript interfaces
└── utils/
    ├── normalizer.ts       # Data parsing utilities
    └── index.ts            # Helper functions
```

---

## Data Source

### Google Sheets Integration

The dashboard fetches financial data from a published Google Sheets document:

**Data Source:** [View Spreadsheet](https://docs.google.com/spreadsheets/d/1wx-yoq72MjaVWmzpYX9hgNNnU9A9_AgZ6rNpzgZUMGg)

### Fetch Strategy

1. **Primary:** Published CSV URL (most reliable)
2. **Fallback 1:** Google Sheets CSV export
3. **Fallback 2:** Google Visualization API
4. **Fallback 3:** Built-in demo data

### Caching

- Data is cached in memory for 5 minutes
- Use the refresh button to force reload

### Updating the Data Source

To use your own Google Sheet:

1. Create a Google Sheet with columns: `Ticker`, `Quarter`, `Revenue`, `Net Income`, `Gross Margin`
2. Publish the sheet: **File → Share → Publish to web → CSV**
3. Update `PUBLISHED_CSV_URL` in `src/constants/index.ts`

---

## Dashboard Widgets

| Widget | Description |
|--------|-------------|
| **Revenue Cards** | Current quarter revenue with QoQ change for each company |
| **Revenue Line Chart** | 3-year quarterly revenue trends (multi-line) |
| **Revenue Donut** | TTM (Trailing Twelve Months) revenue breakdown |
| **Net Income Bar** | TTM net income sorted by value |
| **Gross Margin Bar** | Latest quarter gross margin percentages |
| **Revenue Growth** | Year-over-year growth comparison (4 quarters) |
| **Performance Leaders** | Best and worst performers with animated values |

---

## Customization

### Adding Companies

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
  // Add more companies...
}
```

Add the company logo as PNG in `public/icons/` (lowercase filename).

### Theme Colors

Main colors are defined in `src/assets/main.css`:

| Variable | Value | Usage |
|----------|-------|-------|
| `--color-background` | `#030508` | Page background |
| `--color-card` | `rgba(12, 25, 45, 0.75)` | Card backgrounds |
| `--color-accent` | `#00C8FF` | Primary accent (cyan) |
| `--color-text-primary` | `#F8FAFC` | Main text color |

### Company Colors

Each company has a brand color used in charts:

- Apple: `#A2AAAD`
- Meta: `#0081FB`
- Microsoft: `#00A4EF`
- Google: `#4285F4`
- Amazon: `#FF9900`
- Nvidia: `#76B900`
- Tesla: `#CC0000`

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint and Oxlint |
| `npm run format` | Format code with Prettier |
| `npm run type-check` | Run TypeScript type checking |

---

## Browser Support

| Browser | Version |
|---------|---------|
| Chrome | Latest |
| Firefox | Latest |
| Safari | Latest |
| Edge | Latest |

---

## Legal

- **Legal Notice:** [/#/legal-notice](/#/legal-notice)
- **Privacy Policy:** [/#/privacy](/#/privacy)

### Disclaimer

This dashboard is for **educational purposes only**. The displayed financial data:
- Is not real-time and may be outdated
- Should not be used for investment decisions
- Is sourced from public data without guarantee of accuracy

---

## Author

**Simon Maximilian Heistermann**

- Website: [simon-heistermann.de](https://simon-heistermann.de)
- Email: business@heistermann-solutions.de
- GitHub: [@SimonHeistermann](https://github.com/SimonHeistermann)

---

## License

This project is created for educational and portfolio purposes. All company logos and brand colors are trademarks of their respective owners.

---

## Acknowledgments

- Financial data structure inspired by public earnings reports
- Chart library: [Apache ECharts](https://echarts.apache.org/)
- Icons: Custom PNG logos for the Magnificent Seven companies
- Font: [Rubik](https://fonts.google.com/specimen/Rubik) (locally hosted)
