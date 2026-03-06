# Magnificent Seven Dashboard

> A premium financial dashboard displaying quarterly metrics for the "Magnificent Seven" tech giants — built as a training project at Developer Akademie.

![Vue.js](https://img.shields.io/badge/Vue.js-3.5-4FC08D?style=flat-square&logo=vue.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=flat-square&logo=vite&logoColor=white)

## Disclaimer

This is a **training project** built as part of my education at [Developer Akademie](https://developerakademie.com/). It is not a commercial product and is not intended for real-world use.

- This is **not** a real financial service, investment platform, or advisory tool
- No real transactions, orders, or financial services are processed
- The displayed financial data may be delayed, incomplete, or inaccurate — it should **not** be used for investment decisions
- All company names, logos, and brand elements are trademarks of their respective owners and are used solely for educational demonstration
- This project is **not affiliated with** Apple, Microsoft, Alphabet, Amazon, Meta, NVIDIA, or Tesla

## About

The Magnificent Seven Dashboard visualizes quarterly financial metrics (revenue, net income, gross margins) for the seven largest US tech companies. It demonstrates modern frontend development with Vue 3 Composition API, TypeScript, interactive ECharts visualizations, and responsive glassmorphism design. Data is fetched from a public Google Sheets source with intelligent fallback to demo data.

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **Vue 3** | UI framework with Composition API |
| **TypeScript** | Type-safe development |
| **Vite** | Build tool with HMR |
| **Pinia** | State management |
| **Vue Router** | Client-side routing (hash mode) |
| **ECharts** | Interactive charting library |
| **Tailwind CSS v4** | Utility-first styling |

## Features

- **Real Financial Data** — Fetches quarterly earnings from Google Sheets with fallback to demo data
- **6 Interactive Charts** — Revenue trends, TTM breakdown, net income, gross margins, YoY growth, performance leaders
- **Focus View** — Click any chart to expand into a detailed modal
- **Responsive Design** — Optimized for desktop, tablet, and mobile
- **Premium Dark Theme** — Glassmorphism design with smooth animations
- **Loading States** — Skeleton loaders during data fetch
- **Error Handling** — Graceful fallback with retry functionality

## Getting Started

### Prerequisites

- **Node.js** 20.19+ or 22.12+
- **npm** 10+

### Installation

```bash
git clone https://github.com/SimonHeistermann/Magnificent-Seven.git
cd Magnificent-Seven
npm install
```

### Running

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production (with type checking) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint and Oxlint |
| `npm run format` | Format code with Prettier |
| `npm run type-check` | Run TypeScript type checking |

## Legal

- [Legal Notice / Impressum](https://magnificent-seven.projects.simon-heistermann.de/#/legal-notice)
- [Privacy Policy](https://magnificent-seven.projects.simon-heistermann.de/#/privacy)
- [Disclaimer](https://magnificent-seven.projects.simon-heistermann.de/#/disclaimer)

## Author

**Simon Maximilian Heistermann**

- Website: [simon-heistermann.de](https://simon-heistermann.de)
- Email: simon@heistermann-solutions.de
- LinkedIn: [Simon Heistermann](https://www.linkedin.com/in/simon-heistermann/)
- GitHub: [@SimonHeistermann](https://github.com/SimonHeistermann)

## License

This project is part of a training curriculum and is not licensed for commercial use. All company logos and brand colors are trademarks of their respective owners.
