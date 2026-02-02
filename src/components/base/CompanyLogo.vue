<script setup lang="ts">
import type { CompanyTicker } from '@/types'

// Direct imports - Vite bundles these correctly for production
import appleIcon from '@/assets/icons/apple.png'
import metaIcon from '@/assets/icons/meta.png'
import microsoftIcon from '@/assets/icons/microsoft.png'
import googleIcon from '@/assets/icons/google.png'
import amazonIcon from '@/assets/icons/amazon.png'
import nvidiaIcon from '@/assets/icons/nvidia.png'
import teslaIcon from '@/assets/icons/tesla.png'

defineProps<{
  ticker: CompanyTicker
  size?: 'xs' | 'sm' | 'md' | 'lg'
}>()

// Map ticker to imported icon
const iconPaths: Record<CompanyTicker, string> = {
  AAPL: appleIcon,
  META: metaIcon,
  MSFT: microsoftIcon,
  GOOG: googleIcon,
  AMZN: amazonIcon,
  NVDA: nvidiaIcon,
  TSLA: teslaIcon,
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
