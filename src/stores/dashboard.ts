import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type {
  CompanyTicker,
  CompanyFinancialData,
  CurrentRevenueData,
  TTMData,
  YoYGrowthData,
  PerformanceLeaderData,
} from '@/types'
import { COMPANIES, COMPANY_ORDER, getCompany } from '@/constants'
import { getFinancialData, refreshFinancialData, isUsingMockData } from '@/services'
import { compareQuarters } from '@/utils'

export const useDashboardStore = defineStore('dashboard', () => {
  // State
  const financialData = ref<CompanyFinancialData[]>([])
  const selectedCompanies = ref<CompanyTicker[]>([...COMPANY_ORDER])
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  const lastUpdated = ref<Date | null>(null)
  const focusedWidget = ref<string | null>(null)

  // Getters
  const companies = computed(() => COMPANY_ORDER.map((ticker) => COMPANIES[ticker]))

  const filteredFinancialData = computed(() =>
    financialData.value.filter((d) => selectedCompanies.value.includes(d.ticker)),
  )

  /**
   * Get company data by ticker
   */
  const getCompanyData = (ticker: CompanyTicker): CompanyFinancialData | undefined =>
    financialData.value.find((d) => d.ticker === ticker)

  /**
   * Get the latest quarter across all companies
   */
  const latestQuarter = computed((): string | null => {
    let latest: string | null = null

    for (const company of financialData.value) {
      for (const q of company.quarterlyData) {
        if (!latest || compareQuarters(q.quarter, latest) > 0) {
          latest = q.quarter
        }
      }
    }

    return latest
  })

  /**
   * Current Revenue Data (latest quarter)
   */
  const currentRevenueData = computed((): CurrentRevenueData[] => {
    return filteredFinancialData.value.map((company) => {
      const sortedData = [...company.quarterlyData].sort((a, b) =>
        compareQuarters(b.quarter, a.quarter),
      )
      const latest = sortedData[0]
      const previous = sortedData[1]

      const latestRevenue = latest?.revenue ?? 0
      const previousRevenue = previous?.revenue ?? 0
      const absoluteChange = previous ? latestRevenue - previousRevenue : 0
      const percentageChange = previous && previousRevenue !== 0 ? ((latestRevenue - previousRevenue) / previousRevenue) * 100 : 0

      return {
        ticker: company.ticker,
        company: getCompany(company.ticker),
        quarter: latest?.quarter || '',
        revenue: latest?.revenue || 0,
        absoluteChange,
        percentageChange,
      }
    })
  })

  /**
   * TTM (Trailing Twelve Months) Data
   * Sum of last 4 quarters
   */
  const ttmData = computed((): TTMData[] => {
    return filteredFinancialData.value.map((company) => {
      const sortedData = [...company.quarterlyData].sort((a, b) =>
        compareQuarters(b.quarter, a.quarter),
      )
      const lastFourQuarters = sortedData.slice(0, 4)

      const ttmRevenue = lastFourQuarters.reduce((sum, q) => sum + q.revenue, 0)
      const ttmNetIncome = lastFourQuarters.reduce((sum, q) => sum + q.netIncome, 0)

      return {
        ticker: company.ticker,
        company: getCompany(company.ticker),
        ttmRevenue,
        ttmNetIncome,
        latestQuarter: lastFourQuarters[0]?.quarter || '',
      }
    })
  })

  /**
   * Revenue data for line chart (last 3 years)
   */
  const revenueChartData = computed(() => {
    // Get all unique quarters from the last 3 years
    const allQuarters = new Set<string>()
    const threeYearsAgo = new Date().getFullYear() - 3

    for (const company of filteredFinancialData.value) {
      for (const q of company.quarterlyData) {
        if (q.year >= threeYearsAgo) {
          allQuarters.add(q.quarter)
        }
      }
    }

    // Sort quarters chronologically
    const sortedQuarters = Array.from(allQuarters).sort(compareQuarters)

    // Build data points
    return sortedQuarters.map((quarter) => {
      const dataPoint: Record<string, number | string> = { quarter }

      for (const company of filteredFinancialData.value) {
        const quarterData = company.quarterlyData.find((q) => q.quarter === quarter)
        dataPoint[company.ticker] = quarterData?.revenue || 0
      }

      return dataPoint
    })
  })

  /**
   * YoY Growth Data for last 4 quarters
   */
  const yoyGrowthData = computed((): YoYGrowthData[] => {
    return filteredFinancialData.value.map((company) => {
      const sortedData = [...company.quarterlyData].sort((a, b) =>
        compareQuarters(b.quarter, a.quarter),
      )
      const quarters: { quarter: string; growth: number }[] = []

      // Get last 4 quarters with YoY comparison
      for (let i = 0; i < Math.min(4, sortedData.length); i++) {
        const current = sortedData[i]
        if (!current) continue

        // Find same quarter previous year
        const previousYear = sortedData.find(
          (q) => q.year === current.year - 1 && q.quarterNumber === current.quarterNumber,
        )

        if (previousYear && previousYear.revenue !== 0) {
          const growth = ((current.revenue - previousYear.revenue) / previousYear.revenue) * 100
          quarters.push({
            quarter: current.quarter,
            growth,
          })
        }
      }

      return {
        ticker: company.ticker,
        company: getCompany(company.ticker),
        quarters,
      }
    })
  })

  /**
   * Gross Margin for last quarter
   */
  const grossMarginData = computed(() => {
    return filteredFinancialData.value.map((company) => {
      const sortedData = [...company.quarterlyData].sort((a, b) =>
        compareQuarters(b.quarter, a.quarter),
      )
      const latest = sortedData[0]

      return {
        ticker: company.ticker,
        company: getCompany(company.ticker),
        grossMargin: latest?.grossMargin || 0,
        quarter: latest?.quarter || '',
      }
    })
  })

  /**
   * Net Income TTM for bar chart
   */
  const netIncomeTTMData = computed(() => {
    return ttmData.value
      .map((data) => ({
        ticker: data.ticker,
        company: data.company,
        netIncome: data.ttmNetIncome,
        latestQuarter: data.latestQuarter,
      }))
      .sort((a, b) => b.netIncome - a.netIncome)
  })

  /**
   * Performance Leaders (Best & Worst YoY Growth)
   * Based on most recent quarter's YoY growth
   */
  const performanceLeaderData = computed((): PerformanceLeaderData => {
    const growthData: { ticker: CompanyTicker; growth: number; quarter: string }[] = []

    for (const company of yoyGrowthData.value) {
      const latestQuarter = company.quarters[0]
      if (latestQuarter) {
        growthData.push({
          ticker: company.ticker,
          growth: latestQuarter.growth,
          quarter: latestQuarter.quarter,
        })
      }
    }

    if (growthData.length === 0) {
      return { best: null, worst: null, average: 0 }
    }

    const sorted = [...growthData].sort((a, b) => b.growth - a.growth)
    const best = sorted[0]
    const worst = sorted[sorted.length - 1]
    const average = growthData.reduce((sum, d) => sum + d.growth, 0) / growthData.length

    return {
      best: best
        ? {
            ticker: best.ticker,
            company: getCompany(best.ticker),
            growth: best.growth,
            quarter: best.quarter,
          }
        : null,
      worst: worst
        ? {
            ticker: worst.ticker,
            company: getCompany(worst.ticker),
            growth: worst.growth,
            quarter: worst.quarter,
          }
        : null,
      average,
    }
  })

  // Actions
  async function loadData() {
    isLoading.value = true
    error.value = null

    try {
      financialData.value = await getFinancialData()
      lastUpdated.value = new Date()
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Failed to load data'
      console.error('[DashboardStore] Load error:', e)
    } finally {
      isLoading.value = false
    }
  }

  async function refresh() {
    isLoading.value = true
    error.value = null

    try {
      financialData.value = await refreshFinancialData()
      lastUpdated.value = new Date()
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Failed to refresh data'
    } finally {
      isLoading.value = false
    }
  }

  function toggleCompany(ticker: CompanyTicker) {
    const index = selectedCompanies.value.indexOf(ticker)
    if (index >= 0) {
      selectedCompanies.value.splice(index, 1)
    } else {
      selectedCompanies.value.push(ticker)
    }
  }

  function selectAllCompanies() {
    selectedCompanies.value = [...COMPANY_ORDER]
  }

  function clearSelection() {
    selectedCompanies.value = []
  }

  function setFocusedWidget(widgetId: string | null) {
    focusedWidget.value = widgetId
  }

  return {
    // State
    financialData,
    selectedCompanies,
    isLoading,
    error,
    lastUpdated,
    focusedWidget,

    // Getters
    companies,
    filteredFinancialData,
    latestQuarter,
    currentRevenueData,
    ttmData,
    revenueChartData,
    yoyGrowthData,
    grossMarginData,
    netIncomeTTMData,
    performanceLeaderData,
    isUsingMockData,
    getCompanyData,

    // Actions
    loadData,
    refresh,
    toggleCompany,
    selectAllCompanies,
    clearSelection,
    setFocusedWidget,
  }
})
