<script setup lang="ts">
import type { CurrentRevenueData } from '@/types'
import { CompanyLogo } from '@/components/base'

defineProps<{
  data: CurrentRevenueData
}>()

function formatRevenue(value: number): string {
  return value.toFixed(2)
}

function formatChange(value: number): string {
  const sign = value >= 0 ? '+' : ''
  return `${sign}${value.toFixed(2)}`
}

function formatPercentage(value: number): string {
  const sign = value >= 0 ? '+' : ''
  return `${sign}${value.toFixed(2)}%`
}
</script>

<template>
  <div class="revenue-card">
    <div class="card-header">
      <CompanyLogo :ticker="data.ticker" size="md" />
      <span class="company-name">{{ data.company.displayName }}</span>
    </div>
    <div class="card-label">Revenue {{ data.quarter }}</div>
    <div class="card-value">
      <span class="value">{{ formatRevenue(data.revenue) }}</span>
      <span class="change-group">
        <span
          class="change-absolute"
          :class="{ positive: data.absoluteChange >= 0, negative: data.absoluteChange < 0 }"
        >
          {{ formatChange(data.absoluteChange) }}
        </span>
        <span
          class="change-percent"
          :class="{ positive: data.percentageChange >= 0, negative: data.percentageChange < 0 }"
        >
          {{ formatPercentage(data.percentageChange) }}
        </span>
      </span>
    </div>
    <div class="card-unit">In Bill USD</div>
  </div>
</template>

<style scoped>
.revenue-card {
  background: var(--color-card, rgba(1, 31, 53, 0.7));
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: var(--radius-lg, 12px);
  padding: var(--space-4, 1rem) var(--space-5, 1.25rem);
  min-width: 165px;
  border: 1px solid var(--color-card-border, rgba(0, 212, 255, 0.08));
  transition:
    transform var(--transition-base, 200ms ease),
    box-shadow var(--transition-base, 200ms ease),
    border-color var(--transition-base, 200ms ease);
  position: relative;
}

.revenue-card:hover {
  border-color: var(--color-card-border-hover, rgba(0, 212, 255, 0.2));
  box-shadow:
    0 4px 20px rgba(0, 0, 0, 0.15),
    0 0 30px var(--color-card-glow, rgba(0, 212, 255, 0.06));
  transform: translateY(-1px);
}

.card-header {
  display: flex;
  align-items: center;
  gap: var(--space-2, 0.5rem);
  margin-bottom: var(--space-3, 0.75rem);
}

.company-name {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-primary, #ffffff);
}

.card-label {
  font-size: 0.6875rem;
  color: var(--color-text-muted, #64748b);
  margin-bottom: var(--space-1, 0.25rem);
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.card-value {
  display: flex;
  align-items: baseline;
  gap: var(--space-3, 0.75rem);
  flex-wrap: wrap;
}

.value {
  font-size: 1.375rem;
  font-weight: 600;
  color: var(--color-text-primary, #ffffff);
  font-variant-numeric: tabular-nums;
}

.change-group {
  display: flex;
  flex-direction: column;
  font-size: 0.6875rem;
  line-height: 1.4;
  font-variant-numeric: tabular-nums;
}

.change-absolute,
.change-percent {
  transition: color var(--transition-fast, 150ms ease);
}

.change-absolute.positive,
.change-percent.positive {
  color: var(--color-positive, #10b981);
}

.change-absolute.negative,
.change-percent.negative {
  color: var(--color-negative, #ef4444);
}

.card-unit {
  font-size: 0.625rem;
  color: var(--color-text-disabled, #475569);
  margin-top: var(--space-2, 0.5rem);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
</style>
