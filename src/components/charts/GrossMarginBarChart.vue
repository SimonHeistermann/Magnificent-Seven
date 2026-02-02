<script setup lang="ts">
import { computed, ref } from 'vue'
import VChart from 'vue-echarts'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent, GridComponent } from 'echarts/components'
import type { CompanyTicker } from '@/types'
import { COMPANIES } from '@/constants'

use([CanvasRenderer, BarChart, TitleComponent, TooltipComponent, GridComponent])

const props = defineProps<{
  data: {
    ticker: CompanyTicker
    company: { displayName: string }
    grossMargin: number
    quarter: string
  }[]
  height?: string
}>()

const chartRef = ref()

const option = computed(() => {
  const sortedData = [...props.data].sort((a, b) => b.grossMargin - a.grossMargin)

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
      formatter: (params: { name: string; value: number; dataIndex: number }[]) => {
        const p = params[0]
        if (!p) return ''
        const item = sortedData[p.dataIndex]
        return `<div style="font-weight: 500;">${p.name}</div>
          <div style="margin-top: 4px;">Gross Margin: <b>${p.value.toFixed(1)}%</b></div>
          <div style="color: #94a3b8; font-size: 11px;">${item?.quarter ?? ''}</div>`
      },
    },
    grid: {
      left: 80,
      right: 60,
      top: 10,
      bottom: 10,
    },
    xAxis: {
      type: 'value' as const,
      max: 100,
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
        fontSize: 10,
        formatter: (value: number) => `${value}%`,
      },
    },
    yAxis: {
      type: 'category' as const,
      data: sortedData.map((d) => d.company.displayName),
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: '#94a3b8',
        fontFamily: 'Rubik',
        fontSize: 11,
      },
    },
    series: [
      {
        type: 'bar',
        barWidth: 16,
        itemStyle: {
          borderRadius: [0, 4, 4, 0],
          color: (params: { dataIndex: number }) => {
            const item = sortedData[params.dataIndex]
            return item ? COMPANIES[item.ticker].color : '#666'
          },
        },
        label: {
          show: true,
          position: 'right',
          color: '#94a3b8',
          fontFamily: 'Rubik',
          fontSize: 11,
          formatter: (params: { value: number }) => `${params.value.toFixed(1)}%`,
        },
        data: sortedData.map((d) => d.grossMargin),
      },
    ],
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
