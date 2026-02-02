<script setup lang="ts">
import { computed, ref } from 'vue'
import VChart from 'vue-echarts'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent, LegendComponent } from 'echarts/components'
import type { TTMData } from '@/types'
import { COMPANIES } from '@/constants'

use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent, LegendComponent])

const props = defineProps<{
  data: TTMData[]
  height?: string
}>()

const chartRef = ref()

const option = computed(() => {
  const pieData = props.data.map((d) => ({
    name: d.company.displayName,
    value: d.ttmRevenue,
    itemStyle: {
      color: COMPANIES[d.ticker].color,
    },
    latestQuarter: d.latestQuarter,
  }))

  return {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(1, 31, 53, 0.95)',
      borderColor: 'rgba(0, 212, 255, 0.3)',
      borderWidth: 1,
      textStyle: {
        color: '#ffffff',
        fontFamily: 'Rubik',
      },
      formatter: (params: { name: string; value: number; data: { latestQuarter: string } }) => {
        return `<div style="font-weight: 500;">${params.name}</div>
          <div style="margin-top: 4px;">TTM Revenue: <b>${params.value.toFixed(1)}B</b></div>
          <div style="color: #94a3b8; font-size: 11px;">Latest: ${params.data.latestQuarter}</div>`
      },
    },
    legend: {
      show: true,
      right: 20,
      top: 'center',
      orient: 'vertical' as const,
      textStyle: {
        color: '#94a3b8',
        fontFamily: 'Rubik',
        fontSize: 11,
      },
      itemWidth: 14,
      itemHeight: 14,
      itemGap: 12,
      formatter: (name: string) => {
        const item = props.data.find((d) => d.company.displayName === name)
        return `${name} ${item?.ttmRevenue.toFixed(1) || ''}`
      },
    },
    series: [
      {
        type: 'pie',
        radius: ['50%', '75%'],
        center: ['35%', '50%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 4,
          borderColor: '#011f35',
          borderWidth: 2,
        },
        label: {
          show: false,
        },
        emphasis: {
          label: {
            show: false,
          },
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.3)',
          },
        },
        data: pieData,
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
      :style="{ height: height || '280px', width: '100%' }"
      autoresize
    />
    <div class="chart-footer">In Billion USD TTM</div>
  </div>
</template>

<style scoped>
.chart-container {
  width: 100%;
}

.chart-footer {
  text-align: right;
  font-size: 0.65rem;
  color: #64748b;
  margin-top: -1rem;
  padding-right: 1rem;
}
</style>
