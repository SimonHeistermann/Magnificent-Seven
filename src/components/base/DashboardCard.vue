<script setup lang="ts">
defineProps<{
  title?: string
  clickable?: boolean
}>()

const emit = defineEmits<{
  click: []
}>()

function handleClick() {
  emit('click')
}
</script>

<template>
  <div class="dashboard-card" :class="{ clickable }" @click="clickable && handleClick()">
    <h3 v-if="title" class="card-title">{{ title }}</h3>
    <slot />
  </div>
</template>

<style scoped>
.dashboard-card {
  background: var(--color-card, rgba(12, 25, 45, 0.75));
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: var(--radius-xl, 16px);
  padding: var(--space-6, 1.5rem);
  transition:
    transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    background 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid var(--color-card-border, rgba(0, 180, 220, 0.06));
  position: relative;
  overflow: hidden;
}

/* Top edge highlight */
.dashboard-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent 10%, rgba(0, 200, 255, 0.2) 50%, transparent 90%);
  opacity: 0;
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Corner glow effect */
.dashboard-card::after {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(0, 200, 255, 0.08) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
}

.dashboard-card.clickable {
  cursor: pointer;
}

.dashboard-card.clickable:hover {
  background: var(--color-card-hover, rgba(15, 30, 55, 0.9));
  border-color: var(--color-card-border-hover, rgba(0, 200, 255, 0.15));
  box-shadow:
    0 12px 40px rgba(0, 0, 0, 0.25),
    0 0 60px var(--color-card-glow, rgba(0, 180, 220, 0.05));
  transform: translateY(-3px);
}

.dashboard-card.clickable:hover::before {
  opacity: 1;
}

.dashboard-card.clickable:hover::after {
  opacity: 1;
}

.dashboard-card.clickable:active {
  transform: translateY(-1px);
  transition-duration: 100ms;
}

.card-title {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-secondary, #94a3b8);
  margin-bottom: var(--space-4, 1rem);
  letter-spacing: 0.01em;
  text-transform: none;
}
</style>
