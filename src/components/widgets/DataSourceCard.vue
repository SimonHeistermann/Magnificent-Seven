<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = withDefaults(
  defineProps<{
    title?: string
    description?: string
    sheetUrl?: string
  }>(),
  {
    title: 'Live Data Source',
    description: 'Real-time stock earnings data from Doppelgänger.io',
    sheetUrl:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vRPsZCZ4pBpDjdCyEpYDvXzJcklqIIJW9pNtOYtTJwaa-vOZ2UllFjKmVxDlh8gbjNhdkOcpyvRXBo2/pubhtml?widget=true&headers=false',
  }
)

const isExpanded = ref(false)
const iframeLoaded = ref(false)

function toggleExpand() {
  isExpanded.value = !isExpanded.value
}

function handleIframeLoad() {
  iframeLoaded.value = true
}

onMounted(() => {
  // Preload iframe
  setTimeout(() => {
    iframeLoaded.value = true
  }, 1000)
})
</script>

<template>
  <div id="data-source" class="data-source-card" :class="{ expanded: isExpanded }">
    <!-- Header -->
    <div class="card-header">
      <div class="header-content">
        <div class="header-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
            <polyline points="14,2 14,8 20,8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10,9 9,9 8,9" />
          </svg>
        </div>
        <div class="header-text">
          <h3 class="card-title">{{ title }}</h3>
          <p class="card-description">{{ description }}</p>
        </div>
      </div>

      <div class="header-actions">
        <a
          :href="sheetUrl.replace('pubhtml?widget=true&headers=false', 'pubhtml')"
          target="_blank"
          rel="noopener noreferrer"
          class="action-button"
          title="Open in new tab"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
            <polyline points="15,3 21,3 21,9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
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

    <!-- Content -->
    <div class="card-content">
      <!-- Loading State -->
      <div v-if="!iframeLoaded" class="loading-state">
        <div class="loading-shimmer"></div>
        <span class="loading-text">Loading spreadsheet...</span>
      </div>

      <!-- iframe Container -->
      <div class="iframe-container" :class="{ visible: iframeLoaded }">
        <iframe
          :src="sheetUrl"
          frameborder="0"
          @load="handleIframeLoad"
          title="Stock Earnings Data"
        ></iframe>
      </div>
    </div>

    <!-- Footer -->
    <div class="card-footer">
      <div class="footer-info">
        <span class="live-indicator">
          <span class="pulse-dot"></span>
          Live Data
        </span>
        <span class="source-text">Source: Doppelgänger.io</span>
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
  color: var(--color-accent, #00C8FF);
}

.header-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.card-title {
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-text-primary, #F8FAFC);
  margin: 0;
  letter-spacing: -0.01em;
}

.card-description {
  font-size: 0.75rem;
  color: var(--color-text-muted, #64748B);
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
  color: var(--color-text-muted, #64748B);
  cursor: pointer;
  transition: all var(--transition-fast, 150ms);
}

.action-button:hover {
  background: var(--color-accent-subtle, rgba(0, 200, 255, 0.08));
  border-color: rgba(0, 200, 255, 0.2);
  color: var(--color-text-primary, #F8FAFC);
}

.expand-button svg {
  transition: transform var(--transition-base, 250ms);
}

.expand-button svg.rotated {
  transform: rotate(180deg);
}

.card-content {
  position: relative;
  height: 280px;
  transition: height var(--transition-slow, 400ms) cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.expanded .card-content {
  height: 520px;
}

.loading-state {
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
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.02) 0%,
    rgba(255, 255, 255, 0.05) 50%,
    rgba(255, 255, 255, 0.02) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: var(--radius-md, 8px);
}

.loading-text {
  font-size: 0.75rem;
  color: var(--color-text-muted, #64748B);
}

.iframe-container {
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity var(--transition-slow, 400ms);
}

.iframe-container.visible {
  opacity: 1;
}

.iframe-container iframe {
  width: 100%;
  height: 100%;
  border: none;
  background: #ffffff;
}

.card-footer {
  padding: var(--space-3, 0.75rem) var(--space-6, 1.5rem);
  border-top: 1px solid rgba(255, 255, 255, 0.04);
  background: rgba(0, 0, 0, 0.1);
}

.footer-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.live-indicator {
  display: flex;
  align-items: center;
  gap: var(--space-2, 0.5rem);
  font-size: 0.6875rem;
  color: var(--color-positive, #10B981);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 500;
}

.pulse-dot {
  width: 6px;
  height: 6px;
  background: var(--color-positive, #10B981);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

.source-text {
  font-size: 0.6875rem;
  color: var(--color-text-disabled, #475569);
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

  .card-content {
    height: 240px;
  }

  .expanded .card-content {
    height: 400px;
  }

  .card-footer {
    padding: var(--space-3, 0.75rem) var(--space-4, 1rem);
  }
}
</style>
