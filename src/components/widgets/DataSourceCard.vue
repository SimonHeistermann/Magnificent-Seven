<script setup lang="ts">
import { ref, computed } from 'vue'
import { useDashboardStore } from '@/stores'
import { COMPANIES, COMPANY_ORDER } from '@/constants'
import { CompanyLogo } from '@/components/base'
import type { CompanyTicker } from '@/types'

const props = withDefaults(
  defineProps<{
    title?: string
    description?: string
  }>(),
  {
    title: 'Financial Data Overview',
    description: 'Quarterly earnings data for the Magnificent Seven',
  }
)

const store = useDashboardStore()
const isExpanded = ref(false)
const selectedCompany = ref<CompanyTicker | 'all'>('all')

function toggleExpand() {
  isExpanded.value = !isExpanded.value
}

function selectCompany(ticker: CompanyTicker | 'all') {
  selectedCompany.value = ticker
}

// Get table data based on selection
const tableData = computed(() => {
  const data = store.financialData

  if (selectedCompany.value === 'all') {
    // Show latest quarter for all companies
    return COMPANY_ORDER.map((ticker) => {
      const companyData = data.find((d) => d.ticker === ticker)
      const sortedQuarters = companyData?.quarterlyData
        .slice()
        .sort((a, b) => {
          if (b.year !== a.year) return b.year - a.year
          return b.quarterNumber - a.quarterNumber
        })
      const latest = sortedQuarters?.[0]

      return {
        ticker,
        company: COMPANIES[ticker],
        quarter: latest?.quarter || '-',
        revenue: latest?.revenue || 0,
        netIncome: latest?.netIncome || 0,
        grossMargin: latest?.grossMargin || 0,
      }
    })
  }

  // Show all quarters for selected company
  const companyData = data.find((d) => d.ticker === selectedCompany.value)
  if (!companyData) return []

  return companyData.quarterlyData
    .slice()
    .sort((a, b) => {
      if (b.year !== a.year) return b.year - a.year
      return b.quarterNumber - a.quarterNumber
    })
    .slice(0, isExpanded.value ? 12 : 6)
    .map((q) => ({
      ticker: selectedCompany.value as CompanyTicker,
      company: COMPANIES[selectedCompany.value as CompanyTicker],
      quarter: q.quarter,
      revenue: q.revenue,
      netIncome: q.netIncome,
      grossMargin: q.grossMargin,
    }))
})

const formatCurrency = (value: number) => {
  if (value === 0) return '-'
  return `$${value.toFixed(2)}B`
}

const formatPercent = (value: number) => {
  if (value === 0) return '-'
  return `${value.toFixed(1)}%`
}

const getChangeClass = (value: number) => {
  if (value > 0) return 'positive'
  if (value < 0) return 'negative'
  return ''
}
</script>

<template>
  <div id="data-source" class="data-source-card" :class="{ expanded: isExpanded }">
    <!-- Header -->
    <div class="card-header">
      <div class="header-content">
        <div class="header-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M3 3v18h18" />
            <path d="M7 16l4-4 4 4 6-6" />
          </svg>
        </div>
        <div class="header-text">
          <h3 class="card-title">{{ title }}</h3>
          <p class="card-description">{{ description }}</p>
        </div>
      </div>

      <div class="header-actions">
        <button class="action-button expand-button" @click="toggleExpand" :title="isExpanded ? 'Collapse' : 'Expand'">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            :class="{ rotated: isExpanded }"
          >
            <polyline points="6,9 12,15 18,9" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Company Filter -->
    <div class="filter-bar">
      <button
        class="filter-chip"
        :class="{ active: selectedCompany === 'all' }"
        @click="selectCompany('all')"
      >
        All Companies
      </button>
      <button
        v-for="ticker in COMPANY_ORDER"
        :key="ticker"
        class="filter-chip company-chip"
        :class="{ active: selectedCompany === ticker }"
        @click="selectCompany(ticker)"
      >
        <CompanyLogo :ticker="ticker" size="xs" />
        <span>{{ COMPANIES[ticker].displayName }}</span>
      </button>
    </div>

    <!-- Content -->
    <div class="card-content">
      <!-- Loading State -->
      <div v-if="store.isLoading" class="loading-state">
        <div class="loading-shimmer"></div>
        <span class="loading-text">Loading financial data...</span>
      </div>

      <!-- Error State -->
      <div v-else-if="store.error" class="error-state">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
        <span>{{ store.error }}</span>
        <button class="retry-button" @click="store.refresh()">Retry</button>
      </div>

      <!-- Data Table -->
      <div v-else class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th v-if="selectedCompany === 'all'" class="col-company">Company</th>
              <th class="col-quarter">Quarter</th>
              <th class="col-number">Revenue</th>
              <th class="col-number">Net Income</th>
              <th class="col-number">Gross Margin</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in tableData" :key="index">
              <td v-if="selectedCompany === 'all'" class="col-company">
                <div class="company-cell">
                  <CompanyLogo :ticker="row.ticker" size="sm" />
                  <span class="company-name">{{ row.company.displayName }}</span>
                  <span class="company-ticker">{{ row.ticker }}</span>
                </div>
              </td>
              <td class="col-quarter">
                <span class="quarter-badge">{{ row.quarter }}</span>
              </td>
              <td class="col-number">
                <span class="value">{{ formatCurrency(row.revenue) }}</span>
              </td>
              <td class="col-number">
                <span class="value" :class="getChangeClass(row.netIncome)">
                  {{ formatCurrency(row.netIncome) }}
                </span>
              </td>
              <td class="col-number">
                <span class="value">{{ formatPercent(row.grossMargin) }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Footer -->
    <div class="card-footer">
      <div class="footer-info">
        <span class="data-status" :class="{ mock: store.isUsingMockData() }">
          <span class="status-dot"></span>
          {{ store.isUsingMockData() ? 'Demo Data' : 'Live Data' }}
        </span>
        <span class="source-text">Source: Google Sheets / Doppelgänger.io</span>
      </div>
      <div class="footer-meta">
        <span v-if="store.lastUpdated" class="last-updated">
          Updated: {{ store.lastUpdated.toLocaleTimeString() }}
        </span>
        <button class="refresh-button" @click="store.refresh()" :disabled="store.isLoading">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M23 4v6h-6" />
            <path d="M1 20v-6h6" />
            <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
          </svg>
          <span>Refresh</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.data-source-card {
  background: var(--color-card, rgba(12, 25, 45, 0.75));
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: var(--radius-xl, 16px);
  border: 1px solid var(--color-card-border, rgba(0, 180, 220, 0.06));
  overflow: hidden;
  transition: all var(--transition-slow, 400ms);
}

.data-source-card:hover {
  border-color: var(--color-card-border-hover, rgba(0, 200, 255, 0.18));
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-5, 1.25rem) var(--space-6, 1.5rem);
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  background: rgba(0, 0, 0, 0.15);
}

.header-content {
  display: flex;
  align-items: center;
  gap: var(--space-4, 1rem);
}

.header-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(0, 200, 255, 0.15), rgba(99, 102, 241, 0.1));
  border: 1px solid rgba(0, 200, 255, 0.2);
  border-radius: var(--radius-md, 8px);
  color: var(--color-accent, #00c8ff);
}

.header-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.card-title {
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-text-primary, #f8fafc);
  margin: 0;
  letter-spacing: -0.01em;
}

.card-description {
  font-size: 0.75rem;
  color: var(--color-text-muted, #64748b);
  margin: 0;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: var(--space-2, 0.5rem);
}

.action-button {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-md, 8px);
  color: var(--color-text-muted, #64748b);
  cursor: pointer;
  transition: all var(--transition-fast, 150ms);
}

.action-button:hover {
  background: var(--color-accent-subtle, rgba(0, 200, 255, 0.08));
  border-color: rgba(0, 200, 255, 0.2);
  color: var(--color-text-primary, #f8fafc);
}

.expand-button svg {
  transition: transform var(--transition-base, 250ms);
}

.expand-button svg.rotated {
  transform: rotate(180deg);
}

/* Filter Bar */
.filter-bar {
  display: flex;
  align-items: center;
  gap: var(--space-2, 0.5rem);
  padding: var(--space-3, 0.75rem) var(--space-6, 1.5rem);
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.filter-bar::-webkit-scrollbar {
  display: none;
}

.filter-chip {
  display: flex;
  align-items: center;
  gap: var(--space-2, 0.5rem);
  padding: var(--space-2, 0.5rem) var(--space-3, 0.75rem);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-full, 9999px);
  color: var(--color-text-muted, #64748b);
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-fast, 150ms);
  white-space: nowrap;
  flex-shrink: 0;
}

.filter-chip:hover {
  background: rgba(0, 200, 255, 0.06);
  border-color: rgba(0, 200, 255, 0.15);
  color: var(--color-text-secondary, #94a3b8);
}

.filter-chip.active {
  background: rgba(0, 200, 255, 0.12);
  border-color: rgba(0, 200, 255, 0.3);
  color: var(--color-accent, #00c8ff);
}

/* Card Content */
.card-content {
  position: relative;
  min-height: 280px;
  max-height: 280px;
  transition: max-height var(--transition-slow, 400ms) cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.expanded .card-content {
  max-height: 520px;
}

.loading-state,
.error-state {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-4, 1rem);
  background: rgba(0, 0, 0, 0.2);
}

.loading-shimmer {
  width: 80%;
  height: 60%;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.02) 100%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: var(--radius-md, 8px);
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

.loading-text {
  font-size: 0.75rem;
  color: var(--color-text-muted, #64748b);
}

.error-state {
  color: var(--color-negative, #f43f5e);
}

.error-state svg {
  opacity: 0.6;
}

.retry-button {
  padding: var(--space-2, 0.5rem) var(--space-4, 1rem);
  background: rgba(0, 200, 255, 0.1);
  border: 1px solid rgba(0, 200, 255, 0.2);
  border-radius: var(--radius-md, 8px);
  color: var(--color-accent, #00c8ff);
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-fast, 150ms);
}

.retry-button:hover {
  background: rgba(0, 200, 255, 0.15);
}

/* Table */
.table-container {
  overflow-x: auto;
  overflow-y: auto;
  height: 100%;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.8125rem;
}

.data-table th {
  position: sticky;
  top: 0;
  background: rgba(3, 5, 8, 0.95);
  backdrop-filter: blur(8px);
  padding: var(--space-3, 0.75rem) var(--space-4, 1rem);
  text-align: left;
  font-weight: 500;
  font-size: 0.6875rem;
  color: var(--color-text-muted, #64748b);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  z-index: 1;
}

.data-table th.col-number {
  text-align: right;
}

.data-table td {
  padding: var(--space-3, 0.75rem) var(--space-4, 1rem);
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);
  color: var(--color-text-secondary, #94a3b8);
}

.data-table tr:hover td {
  background: rgba(0, 200, 255, 0.03);
}

.data-table tr:last-child td {
  border-bottom: none;
}

.col-company {
  min-width: 180px;
}

.col-quarter {
  min-width: 100px;
}

.col-number {
  min-width: 100px;
  text-align: right;
}

.company-cell {
  display: flex;
  align-items: center;
  gap: var(--space-3, 0.75rem);
}

.company-name {
  font-weight: 500;
  color: var(--color-text-primary, #f8fafc);
}

.company-ticker {
  font-size: 0.6875rem;
  color: var(--color-text-muted, #64748b);
  padding: 2px 6px;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 4px;
}

.quarter-badge {
  display: inline-block;
  padding: var(--space-1, 0.25rem) var(--space-2, 0.5rem);
  background: rgba(0, 200, 255, 0.08);
  border-radius: var(--radius-sm, 4px);
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--color-accent, #00c8ff);
}

.value {
  font-variant-numeric: tabular-nums;
}

.value.positive {
  color: var(--color-positive, #10b981);
}

.value.negative {
  color: var(--color-negative, #f43f5e);
}

/* Footer */
.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-3, 0.75rem) var(--space-6, 1.5rem);
  border-top: 1px solid rgba(255, 255, 255, 0.04);
  background: rgba(0, 0, 0, 0.1);
}

.footer-info {
  display: flex;
  align-items: center;
  gap: var(--space-4, 1rem);
}

.data-status {
  display: flex;
  align-items: center;
  gap: var(--space-2, 0.5rem);
  font-size: 0.6875rem;
  color: var(--color-positive, #10b981);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 500;
}

.data-status.mock {
  color: var(--color-accent, #00c8ff);
}

.status-dot {
  width: 6px;
  height: 6px;
  background: currentColor;
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.source-text {
  font-size: 0.6875rem;
  color: var(--color-text-disabled, #475569);
}

.footer-meta {
  display: flex;
  align-items: center;
  gap: var(--space-4, 1rem);
}

.last-updated {
  font-size: 0.6875rem;
  color: var(--color-text-disabled, #475569);
}

.refresh-button {
  display: flex;
  align-items: center;
  gap: var(--space-1, 0.25rem);
  padding: var(--space-1, 0.25rem) var(--space-3, 0.75rem);
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-md, 8px);
  color: var(--color-text-muted, #64748b);
  font-size: 0.6875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-fast, 150ms);
}

.refresh-button:hover:not(:disabled) {
  background: var(--color-accent-subtle, rgba(0, 200, 255, 0.08));
  border-color: rgba(0, 200, 255, 0.2);
  color: var(--color-text-primary, #f8fafc);
}

.refresh-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Responsive */
@media (max-width: 768px) {
  .card-header {
    padding: var(--space-4, 1rem);
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-3, 0.75rem);
  }

  .header-actions {
    align-self: flex-end;
  }

  .filter-bar {
    padding: var(--space-3, 0.75rem) var(--space-4, 1rem);
  }

  .card-content {
    min-height: 240px;
    max-height: 240px;
  }

  .expanded .card-content {
    max-height: 400px;
  }

  .card-footer {
    padding: var(--space-3, 0.75rem) var(--space-4, 1rem);
    flex-direction: column;
    gap: var(--space-3, 0.75rem);
    align-items: flex-start;
  }

  .footer-meta {
    width: 100%;
    justify-content: space-between;
  }

  .data-table th,
  .data-table td {
    padding: var(--space-2, 0.5rem) var(--space-3, 0.75rem);
  }
}
</style>
