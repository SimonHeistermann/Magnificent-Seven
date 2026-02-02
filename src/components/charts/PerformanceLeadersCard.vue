<script setup lang="ts">
import { computed, ref, onMounted, watch } from 'vue'
import type { PerformanceLeaderData } from '@/types'
import { CompanyLogo } from '@/components/base'

const props = defineProps<{
  data: PerformanceLeaderData
}>()

// Animated number display
const displayedBestGrowth = ref(0)
const displayedWorstGrowth = ref(0)
const displayedAverage = ref(0)
const isAnimated = ref(false)

function animateValue(
  start: number,
  end: number,
  duration: number,
  callback: (value: number) => void
) {
  const startTime = performance.now()

  function update(currentTime: number) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)

    // Easing function (ease-out cubic)
    const eased = 1 - Math.pow(1 - progress, 3)
    const current = start + (end - start) * eased

    callback(current)

    if (progress < 1) {
      requestAnimationFrame(update)
    }
  }

  requestAnimationFrame(update)
}

function startAnimations() {
  if (isAnimated.value) return
  isAnimated.value = true

  if (props.data.best) {
    animateValue(0, props.data.best.growth, 800, (v) => {
      displayedBestGrowth.value = v
    })
  }
  if (props.data.worst) {
    animateValue(0, props.data.worst.growth, 800, (v) => {
      displayedWorstGrowth.value = v
    })
  }
  animateValue(0, props.data.average, 600, (v) => {
    displayedAverage.value = v
  })
}

onMounted(() => {
  setTimeout(startAnimations, 200)
})

watch(
  () => props.data,
  () => {
    isAnimated.value = false
    startAnimations()
  },
  { deep: true }
)

const formatGrowth = (value: number) => {
  const sign = value >= 0 ? '+' : ''
  return `${sign}${value.toFixed(1)}%`
}

const bestGrowthColor = computed(() => {
  if (!props.data.best) return '#94a3b8'
  return props.data.best.growth >= 0 ? '#10b981' : '#f43f5e'
})

const worstGrowthColor = computed(() => {
  if (!props.data.worst) return '#94a3b8'
  return props.data.worst.growth >= 0 ? '#10b981' : '#f43f5e'
})

const averageColor = computed(() => {
  return props.data.average >= 0 ? '#10b981' : '#f43f5e'
})
</script>

<template>
  <div class="performance-leaders">
    <!-- Best Performer -->
    <div class="leader-section best">
      <div class="section-header">
        <div class="badge best-badge">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
          Best
        </div>
        <span class="quarter-label">{{ data.best?.quarter || '-' }}</span>
      </div>
      <div v-if="data.best" class="leader-content best-content">
        <div class="company-info">
          <CompanyLogo :ticker="data.best.ticker" size="md" />
          <span class="company-name">{{ data.best.company.displayName }}</span>
        </div>
        <div class="growth-value" :style="{ color: bestGrowthColor }">
          {{ formatGrowth(displayedBestGrowth) }}
        </div>
      </div>
      <div v-else class="no-data">No data</div>
    </div>

    <!-- Divider with Average -->
    <div class="divider-section">
      <div class="divider-line"></div>
      <div class="average-badge">
        <span class="avg-label">AVG</span>
        <span class="avg-value" :style="{ color: averageColor }">{{
          formatGrowth(displayedAverage)
        }}</span>
      </div>
      <div class="divider-line"></div>
    </div>

    <!-- Worst Performer -->
    <div class="leader-section worst">
      <div class="section-header">
        <div class="badge worst-badge">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
          Worst
        </div>
        <span class="quarter-label">{{ data.worst?.quarter || '-' }}</span>
      </div>
      <div v-if="data.worst" class="leader-content worst-content">
        <div class="company-info">
          <CompanyLogo :ticker="data.worst.ticker" size="md" />
          <span class="company-name">{{ data.worst.company.displayName }}</span>
        </div>
        <div class="growth-value" :style="{ color: worstGrowthColor }">
          {{ formatGrowth(displayedWorstGrowth) }}
        </div>
      </div>
      <div v-else class="no-data">No data</div>
    </div>
  </div>
</template>

<style scoped>
.performance-leaders {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 0.875rem;
}

.leader-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.3125rem 0.625rem;
  border-radius: 6px;
  font-size: 0.6875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.best-badge {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.08) 100%);
  color: #10b981;
  border: 1px solid rgba(16, 185, 129, 0.2);
}

.worst-badge {
  background: linear-gradient(135deg, rgba(244, 63, 94, 0.15) 0%, rgba(244, 63, 94, 0.08) 100%);
  color: #f43f5e;
  border: 1px solid rgba(244, 63, 94, 0.2);
}

.quarter-label {
  font-size: 0.6875rem;
  color: var(--color-text-muted, #64748b);
  font-weight: 500;
}

.leader-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.875rem 1rem;
  border-radius: 10px;
  border: 1px solid transparent;
  transition: all var(--transition-base, 250ms);
}

.best-content {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.06) 0%, rgba(16, 185, 129, 0.02) 100%);
  border-color: rgba(16, 185, 129, 0.1);
}

.best-content:hover {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.04) 100%);
  border-color: rgba(16, 185, 129, 0.2);
  transform: translateX(4px);
}

.worst-content {
  background: linear-gradient(135deg, rgba(244, 63, 94, 0.06) 0%, rgba(244, 63, 94, 0.02) 100%);
  border-color: rgba(244, 63, 94, 0.1);
}

.worst-content:hover {
  background: linear-gradient(135deg, rgba(244, 63, 94, 0.1) 0%, rgba(244, 63, 94, 0.04) 100%);
  border-color: rgba(244, 63, 94, 0.2);
  transform: translateX(4px);
}

.company-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.company-name {
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--color-text-primary, #f8fafc);
}

.growth-value {
  font-size: 1.375rem;
  font-weight: 600;
  font-family: 'Rubik', sans-serif;
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
}

.divider-section {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  padding: 0.375rem 0;
}

.divider-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0, 180, 220, 0.15), transparent);
}

.average-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 1rem;
  background: rgba(0, 180, 220, 0.06);
  border-radius: 8px;
  border: 1px solid rgba(0, 180, 220, 0.12);
  min-width: 80px;
}

.avg-label {
  font-size: 0.5625rem;
  color: var(--color-text-muted, #64748b);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 600;
}

.avg-value {
  font-size: 0.9375rem;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}

.no-data {
  color: var(--color-text-muted, #64748b);
  font-size: 0.875rem;
  padding: 0.875rem 1rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 10px;
  border: 1px dashed rgba(255, 255, 255, 0.08);
}
</style>
