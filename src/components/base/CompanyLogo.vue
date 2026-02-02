<script setup lang="ts">
import type { CompanyTicker } from '@/types'

defineProps<{
  ticker: CompanyTicker
  size?: 'xs' | 'sm' | 'md' | 'lg'
}>()

// Map ticker to PNG icon path
const iconPaths: Record<CompanyTicker, string> = {
  AAPL: '/icons/apple.png',
  META: '/icons/meta.png',
  MSFT: '/icons/microsoft.png',
  GOOG: '/icons/google.png',
  AMZN: '/icons/amazon.png',
  NVDA: '/icons/nvidia.png',
  TSLA: '/icons/tesla.png',
}

// Company display names for alt text
const companyNames: Record<CompanyTicker, string> = {
  AAPL: 'Apple',
  META: 'Meta',
  MSFT: 'Microsoft',
  GOOG: 'Google',
  AMZN: 'Amazon',
  NVDA: 'Nvidia',
  TSLA: 'Tesla',
}
</script>

<template>
  <div class="company-logo" :class="[size || 'md']">
    <img :src="iconPaths[ticker]" :alt="companyNames[ticker]" class="logo-img" />
  </div>
</template>

<style scoped>
.company-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.logo-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.company-logo.xs {
  width: 14px;
  height: 14px;
}

.company-logo.sm {
  width: 18px;
  height: 18px;
}

.company-logo.md {
  width: 24px;
  height: 24px;
}

.company-logo.lg {
  width: 32px;
  height: 32px;
}
</style>
