<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

defineProps<{
  title?: string
}>()

const emit = defineEmits<{
  close: []
}>()

function handleClose() {
  emit('close')
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    handleClose()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
  document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <div class="modal-overlay" @click.self="handleClose">
      <div class="modal-container">
        <div class="modal-header">
          <h2 v-if="title" class="modal-title">{{ title }}</h2>
          <button class="close-button" @click="handleClose" aria-label="Close">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div class="modal-content">
          <slot />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(2, 2, 4, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: var(--space-8, 2rem);
  animation: fadeIn 0.25s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.modal-container {
  background: var(--color-card, rgba(1, 31, 53, 0.95));
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: var(--radius-xl, 16px);
  border: 1px solid var(--color-card-border-hover, rgba(0, 212, 255, 0.15));
  width: 100%;
  max-width: 1200px;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  animation: slideIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow:
    0 24px 64px rgba(0, 0, 0, 0.4),
    0 0 80px var(--color-card-glow, rgba(0, 212, 255, 0.08));
}

@keyframes slideIn {
  from {
    transform: scale(0.92) translateY(24px);
    opacity: 0;
  }
  to {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-5, 1.25rem) var(--space-6, 1.5rem);
  border-bottom: 1px solid rgba(0, 212, 255, 0.08);
  background: rgba(0, 0, 0, 0.1);
}

.modal-title {
  font-size: 1.125rem;
  font-weight: 500;
  color: var(--color-text-primary, #ffffff);
  margin: 0;
  letter-spacing: -0.01em;
}

.close-button {
  background: transparent;
  border: 1px solid transparent;
  color: var(--color-text-secondary, #94a3b8);
  cursor: pointer;
  padding: var(--space-2, 0.5rem);
  border-radius: var(--radius-md, 8px);
  transition:
    background var(--transition-fast, 150ms ease),
    border-color var(--transition-fast, 150ms ease),
    color var(--transition-fast, 150ms ease);
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-button:hover {
  background: var(--color-accent-subtle, rgba(0, 212, 255, 0.1));
  border-color: rgba(0, 212, 255, 0.2);
  color: var(--color-text-primary, #ffffff);
}

.close-button:active {
  transform: scale(0.95);
}

.modal-content {
  padding: var(--space-6, 1.5rem);
  overflow: auto;
  flex: 1;
}

@media (max-width: 768px) {
  .modal-overlay {
    padding: var(--space-4, 1rem);
  }

  .modal-container {
    max-height: 95vh;
  }

  .modal-header {
    padding: var(--space-4, 1rem);
  }

  .modal-content {
    padding: var(--space-4, 1rem);
  }
}
</style>
