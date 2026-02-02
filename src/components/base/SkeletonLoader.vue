<script setup lang="ts">
defineProps<{
  width?: string
  height?: string
  borderRadius?: string
}>()
</script>

<template>
  <div
    class="skeleton"
    :style="{
      width: width || '100%',
      height: height || '20px',
      borderRadius: borderRadius || '4px',
    }"
  />
</template>

<style scoped>
.skeleton {
  background: linear-gradient(
    90deg,
    rgba(0, 212, 255, 0.05) 0%,
    rgba(0, 212, 255, 0.1) 50%,
    rgba(0, 212, 255, 0.05) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s ease-in-out infinite;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>
