<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import type { CurrentRevenueData } from '@/types'
import RevenueCard from './RevenueCard.vue'
import { SkeletonLoader } from '@/components/base'

defineProps<{
  data: CurrentRevenueData[]
  isLoading?: boolean
}>()

const scrollContainer = ref<HTMLElement | null>(null)
const canScrollLeft = ref(false)
const canScrollRight = ref(false)
const isMobile = ref(false)

// Check if content overflows (needs scroll)
function checkOverflow() {
  if (!scrollContainer.value) return
  const { scrollWidth, clientWidth } = scrollContainer.value
  const hasOverflow = scrollWidth > clientWidth + 10
  canScrollRight.value = hasOverflow && isMobile.value
}

function scroll(direction: 'left' | 'right') {
  if (!scrollContainer.value) return

  const scrollAmount = 200
  const newScroll =
    scrollContainer.value.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount)

  scrollContainer.value.scrollTo({
    left: newScroll,
    behavior: 'smooth',
  })
}

function updateScrollState() {
  if (!scrollContainer.value) return

  const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.value
  // Only show arrows on mobile when there's overflow
  if (isMobile.value) {
    canScrollLeft.value = scrollLeft > 0
    canScrollRight.value = scrollLeft + clientWidth < scrollWidth - 10
  } else {
    canScrollLeft.value = false
    canScrollRight.value = false
  }
}

function handleResize() {
  isMobile.value = window.innerWidth < 1024
  checkOverflow()
  updateScrollState()
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <div class="revenue-cards-container">
    <button
      v-if="canScrollLeft"
      class="scroll-button left"
      @click="scroll('left')"
      aria-label="Scroll left"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="15 18 9 12 15 6" />
      </svg>
    </button>

    <div
      ref="scrollContainer"
      class="cards-scroll"
      @scroll="updateScrollState"
    >
      <template v-if="isLoading">
        <div v-for="i in 7" :key="i" class="skeleton-card">
          <SkeletonLoader width="80px" height="20px" />
          <SkeletonLoader width="60px" height="12px" />
          <SkeletonLoader width="100px" height="32px" />
          <SkeletonLoader width="40px" height="10px" />
        </div>
      </template>
      <template v-else>
        <RevenueCard
          v-for="item in data"
          :key="item.ticker"
          :data="item"
        />
      </template>
    </div>

    <button
      v-if="canScrollRight"
      class="scroll-button right"
      @click="scroll('right')"
      aria-label="Scroll right"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.revenue-cards-container {
  position: relative;
  display: flex;
  align-items: center;
}

.cards-scroll {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding: 0.5rem 0;
  width: 100%;
}

/* Desktop: justify cards evenly, no scroll needed */
@media (min-width: 1024px) {
  .cards-scroll {
    justify-content: space-between;
    overflow-x: visible;
  }
}

/* Tablet: allow wrapping */
@media (min-width: 768px) and (max-width: 1023px) {
  .cards-scroll {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;
  }
}

.cards-scroll::-webkit-scrollbar {
  display: none;
}

.skeleton-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: #011f35;
  border-radius: 12px;
  padding: 1rem 1.25rem;
  min-width: 160px;
  border: 1px solid rgba(0, 212, 255, 0.1);
}

.scroll-button {
  position: absolute;
  z-index: 10;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #011f35;
  border: 1px solid rgba(0, 212, 255, 0.3);
  color: #00d4ff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

/* Hide scroll buttons on desktop */
@media (min-width: 1024px) {
  .scroll-button {
    display: none;
  }
}

.scroll-button:hover {
  background: rgba(0, 212, 255, 0.1);
  border-color: rgba(0, 212, 255, 0.5);
}

.scroll-button.left {
  left: -18px;
}

.scroll-button.right {
  right: -18px;
}
</style>
