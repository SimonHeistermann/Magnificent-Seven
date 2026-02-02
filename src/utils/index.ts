export * from './normalizer'

// General utility functions

export function debounce<T extends (...args: unknown[]) => unknown>(
  fn: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), delay)
  }
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

// Generate color shades for charts
export function generateColorShades(baseColor: string, count: number): string[] {
  // Simple implementation - for more sophisticated results, use a color library
  const shades: string[] = []

  for (let i = 0; i < count; i++) {
    const factor = 1 - (i / count) * 0.6 // Darken progressively
    shades.push(adjustColorBrightness(baseColor, factor))
  }

  return shades
}

function adjustColorBrightness(hex: string, factor: number): string {
  // Remove # if present
  const color = hex.replace('#', '')

  const r = Math.round(parseInt(color.substring(0, 2), 16) * factor)
  const g = Math.round(parseInt(color.substring(2, 4), 16) * factor)
  const b = Math.round(parseInt(color.substring(4, 6), 16) * factor)

  return `#${[r, g, b].map((c) => Math.min(255, c).toString(16).padStart(2, '0')).join('')}`
}
