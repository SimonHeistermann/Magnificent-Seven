<script setup lang="ts">
import { onMounted, onUnmounted, ref, computed, nextTick } from 'vue'
import { useDashboardStore } from '@/stores'
import { DashboardCard, FocusModal, SkeletonLoader, ErrorState, SiteFooter } from '@/components/base'
import { RevenueCardsRow, DataSourceCard } from '@/components/widgets'
import {
  RevenueLineChart,
  RevenueDonutChart,
  NetIncomeBarChart,
  GrossMarginBarChart,
  RevenueGrowthChart,
  PerformanceLeadersCard,
} from '@/components/charts'

const store = useDashboardStore()
const focusedChart = ref<string | null>(null)
const isLoaded = ref(false)

// Intersection Observer for scroll animations
const observerRef = ref<IntersectionObserver | null>(null)

onMounted(async () => {
  store.loadData()

  // Trigger entrance animations after mount
  await nextTick()
  setTimeout(() => {
    isLoaded.value = true
  }, 100)

  // Setup Intersection Observer for scroll animations
  observerRef.value = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  )

  // Observe all animate-on-scroll elements
  document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    observerRef.value?.observe(el)
  })
})

onUnmounted(() => {
  observerRef.value?.disconnect()
})

function openFocusView(chartId: string) {
  focusedChart.value = chartId
}

function closeFocusView() {
  focusedChart.value = null
}

const focusedChartTitle = computed(() => {
  switch (focusedChart.value) {
    case 'revenue-line':
      return 'Revenue last 3 years'
    case 'revenue-donut':
      return 'Revenue Breakdown Magnificent Seven'
    case 'net-income':
      return 'Net Income TTM'
    case 'gross-margin':
      return 'Gross Margin in % LQ'
    case 'revenue-growth':
      return 'Revenue Growth in % YoY'
    case 'performance-leaders':
      return 'Performance Leaders YoY'
    default:
      return ''
  }
})
</script>

<template>
  <div class="dashboard-wrapper">
    <div class="dashboard" :class="{ loaded: isLoaded }">
      <!-- Header -->
      <header class="dashboard-header">
        <div class="header-accent"></div>
        <div class="header-content">
          <h1 class="header-title">The Magnificent Seven</h1>
          <p class="header-subtitle">Financial metrics for tech's largest companies</p>
        </div>
        <div class="header-status">
          <span class="status-badge" :class="{ 'status-badge--demo': store.isUsingMockData() }">
            {{ store.isUsingMockData() ? 'Demo Data' : 'Data from 2024' }}
          </span>
        </div>
      </header>

      <!-- Error State -->
      <ErrorState
        v-if="store.error && !store.isLoading"
        :message="store.error"
        retryable
        @retry="store.refresh()"
      />

      <!-- Main Content -->
      <main class="dashboard-content" v-else>
        <!-- Revenue Cards Row -->
        <section class="revenue-cards-section animate-section stagger-1">
          <RevenueCardsRow :data="store.currentRevenueData" :is-loading="store.isLoading" />
        </section>

        <!-- Section Divider -->
        <div class="section-divider-subtle"></div>

        <!-- Charts Grid -->
        <section class="charts-section">
          <div class="charts-grid">
            <!-- Revenue Line Chart -->
            <DashboardCard
              title="Revenue last 3 years"
              clickable
              class="chart-card animate-card stagger-2"
              @click="openFocusView('revenue-line')"
            >
              <template v-if="store.isLoading">
                <SkeletonLoader height="280px" border-radius="8px" />
              </template>
              <RevenueLineChart
                v-else
                :data="store.revenueChartData"
                :selected-companies="store.selectedCompanies"
                height="280px"
              />
            </DashboardCard>

            <!-- Revenue Donut Chart -->
            <DashboardCard
              title="Revenue Breakdown Magnificent Seven"
              clickable
              class="chart-card animate-card stagger-3"
              @click="openFocusView('revenue-donut')"
            >
              <template v-if="store.isLoading">
                <SkeletonLoader height="260px" border-radius="8px" />
              </template>
              <RevenueDonutChart v-else :data="store.ttmData" height="260px" />
            </DashboardCard>

            <!-- Net Income TTM -->
            <DashboardCard
              title="Net Income TTM"
              clickable
              class="chart-card animate-card stagger-4"
              @click="openFocusView('net-income')"
            >
              <template v-if="store.isLoading">
                <SkeletonLoader height="200px" border-radius="8px" />
              </template>
              <NetIncomeBarChart v-else :data="store.netIncomeTTMData" height="200px" />
            </DashboardCard>

            <!-- Gross Margin -->
            <DashboardCard
              title="Gross Margin in % LQ"
              clickable
              class="chart-card animate-card stagger-5"
              @click="openFocusView('gross-margin')"
            >
              <template v-if="store.isLoading">
                <SkeletonLoader height="200px" border-radius="8px" />
              </template>
              <GrossMarginBarChart v-else :data="store.grossMarginData" height="200px" />
            </DashboardCard>

            <!-- Revenue Growth YoY -->
            <DashboardCard
              title="Revenue Growth in % YoY"
              clickable
              class="chart-card animate-card stagger-6"
              @click="openFocusView('revenue-growth')"
            >
              <template v-if="store.isLoading">
                <SkeletonLoader height="200px" border-radius="8px" />
              </template>
              <RevenueGrowthChart v-else :data="store.yoyGrowthData" height="200px" />
            </DashboardCard>

            <!-- Performance Leaders -->
            <DashboardCard
              title="Performance Leaders YoY"
              clickable
              class="chart-card animate-card stagger-7"
              @click="openFocusView('performance-leaders')"
            >
              <template v-if="store.isLoading">
                <SkeletonLoader height="200px" border-radius="8px" />
              </template>
              <PerformanceLeadersCard v-else :data="store.performanceLeaderData" />
            </DashboardCard>
          </div>
        </section>

        <!-- Section Divider -->
        <div class="section-divider"></div>

        <!-- Data Source Section -->
        <section class="data-source-section animate-on-scroll">
          <DataSourceCard />
        </section>
      </main>

      <!-- Focus Modal -->
      <FocusModal v-if="focusedChart" :title="focusedChartTitle" @close="closeFocusView">
        <RevenueLineChart
          v-if="focusedChart === 'revenue-line'"
          :data="store.revenueChartData"
          :selected-companies="store.selectedCompanies"
          height="500px"
        />
        <RevenueDonutChart
          v-else-if="focusedChart === 'revenue-donut'"
          :data="store.ttmData"
          height="500px"
        />
        <NetIncomeBarChart
          v-else-if="focusedChart === 'net-income'"
          :data="store.netIncomeTTMData"
          height="400px"
        />
        <GrossMarginBarChart
          v-else-if="focusedChart === 'gross-margin'"
          :data="store.grossMarginData"
          height="400px"
        />
        <RevenueGrowthChart
          v-else-if="focusedChart === 'revenue-growth'"
          :data="store.yoyGrowthData"
          height="400px"
        />
        <PerformanceLeadersCard
          v-else-if="focusedChart === 'performance-leaders'"
          :data="store.performanceLeaderData"
        />
      </FocusModal>
    </div>

    <!-- Footer -->
    <SiteFooter />
  </div>
</template>

<style scoped>
.dashboard-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.dashboard {
  flex: 1;
  padding: var(--space-12, 3rem) var(--space-8, 2rem) var(--space-16, 4rem);
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  opacity: 0;
  transform: translateY(12px);
  transition:
    opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.dashboard.loaded {
  opacity: 1;
  transform: translateY(0);
}

/* Header */
.dashboard-header {
  display: flex;
  align-items: flex-start;
  gap: var(--space-5, 1.25rem);
  margin-bottom: var(--space-12, 3rem);
  padding-bottom: var(--space-8, 2rem);
  border-bottom: 1px solid rgba(0, 180, 220, 0.06);
}

.header-accent {
  width: 4px;
  height: 48px;
  background: linear-gradient(180deg, #00c8ff 0%, #6366f1 100%);
  border-radius: var(--radius-full, 9999px);
  box-shadow: 0 0 20px rgba(0, 200, 255, 0.4);
  flex-shrink: 0;
  margin-top: 4px;
}

.header-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space-2, 0.5rem);
}

.header-title {
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-text-primary, #f8fafc);
  margin: 0;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.header-subtitle {
  font-size: 0.9375rem;
  color: var(--color-text-muted, #64748b);
  margin: 0;
  font-weight: 400;
}

.header-status {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.status-badge {
  background: rgba(251, 191, 36, 0.1);
  border: 1px solid rgba(251, 191, 36, 0.25);
  color: #fbbf24;
  padding: var(--space-2, 0.5rem) var(--space-4, 1rem);
  border-radius: var(--radius-full, 9999px);
  font-size: 0.6875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.status-badge--demo {
  background: var(--color-accent-subtle, rgba(0, 200, 255, 0.08));
  border: 1px solid rgba(0, 200, 255, 0.2);
  color: var(--color-accent, #00c8ff);
}

/* Content */
.dashboard-content {
  display: flex;
  flex-direction: column;
}

.revenue-cards-section {
  margin-bottom: var(--space-4, 1rem);
}

.charts-section {
  margin-bottom: var(--space-4, 1rem);
}

/* Animation classes */
.animate-section {
  opacity: 0;
  animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-card {
  opacity: 0;
  animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

/* Charts Grid - 3x2 */
.charts-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6, 1.5rem);
}

.chart-card {
  min-height: 320px;
}

/* Section dividers */
.section-divider {
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(0, 180, 220, 0.12) 20%,
    rgba(0, 180, 220, 0.12) 80%,
    transparent
  );
  margin: var(--space-12, 3rem) 0;
}

.section-divider-subtle {
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.04) 30%,
    rgba(255, 255, 255, 0.04) 70%,
    transparent
  );
  margin: var(--space-8, 2rem) 0;
}

/* Data Source Section */
.data-source-section {
  margin-top: var(--space-4, 1rem);
}

/* Responsive: XL screens */
@media (min-width: 1280px) {
  .charts-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Responsive: Large screens */
@media (max-width: 1279px) {
  .charts-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Responsive: Medium screens */
@media (max-width: 900px) {
  .charts-grid {
    grid-template-columns: 1fr;
  }
}

/* Responsive: Tablet */
@media (max-width: 768px) {
  .dashboard {
    padding: var(--space-8, 2rem) var(--space-4, 1rem) var(--space-12, 3rem);
  }

  .dashboard-header {
    margin-bottom: var(--space-8, 2rem);
    padding-bottom: var(--space-6, 1.5rem);
    flex-wrap: wrap;
  }

  .header-accent {
    height: 36px;
  }

  .header-title {
    font-size: 1.5rem;
  }

  .header-subtitle {
    font-size: 0.875rem;
  }

  .charts-grid {
    gap: var(--space-4, 1rem);
  }

  .chart-card {
    min-height: 280px;
  }

  .section-divider,
  .section-divider-subtle {
    margin: var(--space-8, 2rem) 0;
  }
}

/* Responsive: Small mobile */
@media (max-width: 480px) {
  .dashboard {
    padding: var(--space-6, 1.5rem) var(--space-3, 0.75rem) var(--space-10, 2.5rem);
  }

  .dashboard-header {
    gap: var(--space-3, 0.75rem);
  }

  .header-title {
    font-size: 1.25rem;
  }

  .header-subtitle {
    font-size: 0.8125rem;
  }

  .status-badge {
    padding: var(--space-1, 0.25rem) var(--space-3, 0.75rem);
    font-size: 0.5625rem;
  }

  .chart-card {
    min-height: 260px;
  }
}
</style>
