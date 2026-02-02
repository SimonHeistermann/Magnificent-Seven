<script setup lang="ts">
import { computed, ref } from 'vue'
import VChart from 'vue-echarts'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { LineChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from 'echarts/components'
import type { CompanyTicker } from '@/types'
import { COMPANIES, COMPANY_ORDER } from '@/constants'

use([CanvasRenderer, LineChart, TitleComponent, TooltipComponent, LegendComponent, GridComponent])

const props = defineProps<{
  data: Record<string, number | string>[]
  selectedCompanies: CompanyTicker[]
  height?: string
}>()

const chartRef = ref()

const option = computed(() => {
  const quarters = props.data.map((d) => d.quarter as string)
  const series = props.selectedCompanies.map((ticker) => ({
    name: COMPANIES[ticker].displayName,
    type: 'line' as const,
    smooth: true,
    symbol: 'circle',
    symbolSize: 6,
    lineStyle: {
      width: 2,
    },
    itemStyle: {
      color: COMPANIES[ticker].color,
    },
    emphasis: {
      focus: 'series' as const,
    },
    data: props.data.map((d) => d[ticker] as number),
  }))

  return {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(1, 31, 53, 0.95)',
      borderColor: 'rgba(0, 212, 255, 0.3)',
      borderWidth: 1,
      textStyle: {
        color: '#ffffff',
        fontFamily: 'Rubik',
      },
      formatter: (params: { name: string; seriesName: string; value: number; color: string }[]) => {
        const firstParam = params[0]
        if (!firstParam) return ''
        let html = `<div style="font-weight: 500; margin-bottom: 8px;">${firstParam.name}</div>`
        params.forEach((p) => {
          html += `<div style="display: flex; align-items: center; gap: 8px; margin: 4px 0;">
            <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background: ${p.color};"></span>
            <span>${p.seriesName}</span>
            <span style="margin-left: auto; font-weight: 500;">${p.value.toFixed(1)}</span>
          </div>`
        })
        return html
      },
    },
    legend: {
      show: true,
      right: 20,
      top: 10,
      orient: 'vertical' as const,
      textStyle: {
        color: '#94a3b8',
        fontFamily: 'Rubik',
        fontSize: 11,
      },
      itemWidth: 20,
      itemHeight: 3,
      formatter: (name: string) => {
        const ticker = COMPANY_ORDER.find(t => COMPANIES[t].displayName === name)
        if (ticker) {
          const latestValue = props.data[props.data.length - 1]?.[ticker] as number
          return `${name} ${latestValue?.toFixed(1) || ''}`
        }
        return name
      },
    },
    grid: {
      left: 50,
      right: 120,
      top: 20,
      bottom: 60,
    },
    xAxis: {
      type: 'category' as const,
      data: quarters,
      axisLine: {
        lineStyle: {
          color: 'rgba(148, 163, 184, 0.2)',
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: '#64748b',
        fontFamily: 'Rubik',
        fontSize: 10,
        rotate: 45,
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
      :style="{ height: height || '300px', width: '100%' }"
      autoresize
    />
  </div>
</template>

<style scoped>
.chart-container {
  width: 100%;
}
</style>
