<script setup lang="ts">
import { computed, ref } from 'vue'
import VChart from 'vue-echarts'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent, GridComponent, LegendComponent } from 'echarts/components'
import type { YoYGrowthData } from '@/types'
import { COMPANIES } from '@/constants'

use([CanvasRenderer, BarChart, TitleComponent, TooltipComponent, GridComponent, LegendComponent])

const props = defineProps<{
  data: YoYGrowthData[]
  height?: string
}>()

const chartRef = ref()

// Quarter colors - from dark to light (most recent to oldest)
const quarterColors = ['#00D4FF', '#00A4D4', '#0074A8', '#00447C']

const option = computed(() => {
  // Get all unique quarters across companies
  const allQuarters = new Set<string>()
  props.data.forEach((d) => d.quarters.forEach((q) => allQuarters.add(q.quarter)))
  const sortedQuarters = Array.from(allQuarters).sort((a, b) => {
    const partsA = a.replace('Q', '').split(' ')
    const partsB = b.replace('Q', '').split(' ')
    const qA = partsA[0] ?? '0'
    const yA = partsA[1] ?? '0'
    const qB = partsB[0] ?? '0'
    const yB = partsB[1] ?? '0'
    if (yA !== yB) return parseInt(yB) - parseInt(yA)
    return parseInt(qB) - parseInt(qA)
  })

  const companies = props.data.map((d) => d.company.displayName)

  // Create series for each quarter
  const series = sortedQuarters.slice(0, 4).map((quarter, idx) => ({
    name: quarter,
    type: 'bar' as const,
    barGap: '10%',
    barWidth: 12,
    itemStyle: {
      borderRadius: [4, 4, 0, 0],
      color: quarterColors[idx],
    },
    data: props.data.map((company) => {
      const quarterData = company.quarters.find((q) => q.quarter === quarter)
      return quarterData?.growth || 0
    }),
  }))

  return {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
      backgroundColor: 'rgba(1, 31, 53, 0.95)',
      borderColor: 'rgba(0, 212, 255, 0.3)',
      borderWidth: 1,
      textStyle: {
        color: '#ffffff',
        fontFamily: 'Rubik',
      },
      formatter: (params: { seriesName: string; name: string; value: number; color: string }[]) => {
        const firstParam = params[0]
        if (!firstParam) return ''
        let html = `<div style="font-weight: 500; margin-bottom: 8px;">${firstParam.name}</div>`
        params.forEach((p) => {
          const sign = p.value >= 0 ? '+' : ''
          html += `<div style="display: flex; align-items: center; gap: 8px; margin: 4px 0;">
            <span style="display: inline-block; width: 10px; height: 10px; border-radius: 2px; background: ${p.color};"></span>
            <span>${p.seriesName}</span>
            <span style="margin-left: auto; font-weight: 500; color: ${p.value >= 0 ? '#10b981' : '#ef4444'};">${sign}${p.value.toFixed(1)}%</span>
          </div>`
        })
        return html
      },
    },
    legend: {
      show: true,
      right: 20,
      top: 10,
      textStyle: {
        color: '#94a3b8',
        fontFamily: 'Rubik',
        fontSize: 11,
      },
      itemWidth: 12,
      itemHeight: 12,
    },
    grid: {
      left: 60,
      right: 120,
      top: 50,
      bottom: 30,
    },
    xAxis: {
      type: 'category' as const,
      data: companies,
      axisLine: {
        lineStyle: {
          color: 'rgba(148, 163, 184, 0.2)',
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: '#94a3b8',
        fontFamily: 'Rubik',
        fontSize: 10,
      },
    },
    yAxis: {
      type: 'value' as const,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(148, 163, 184, 0.1)',
        },
      },
      axisLabel: {
        color: '#64748b',
        fontFamily: 'Rubik',
        fontSize: 11,
        formatter: (value: number) => `${value}%`,
      },
    },
    series,
  }
})
</script>

<template>
  <div class="chart-container">
    <VChart
      ref="chartRef"
      :option="option"
      :style="{ height: height || '220px', width: '100%' }"
      autoresize
    />
  </div>
</template>

<style scoped>
.chart-container {
  width: 100%;
}
</style>
