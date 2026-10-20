<script setup lang="ts">
const props = withDefaults(defineProps<{
	items: {
		img: string
	}[],
	autoplay?: boolean
	interval?: number,
	showDots?: boolean
}>(), {
	autoplay: true,
	interval: 5000,
	showDots: true
})

const current = ref(0)
let timer: number | null = null
let touchStartX = 0

const goTo = (i: number) => {
  const len = props.items.length
  current.value = (i + len) % len
}

const next = () => goTo(current.value + 1)
const prev = () => goTo(current.value - 1)

const startTimer = () => {
  if (!props.autoplay || props.items.length < 2) return
  stopTimer()
  timer = setInterval(next, props.interval)
}
const stopTimer = () => {
  if (timer) { clearInterval(timer); timer = null }
}
const pause = () => stopTimer()
const resume = () => startTimer()

// Свайп
const onTouchStart = (e: TouchEvent) => { touchStartX = e.changedTouches[0]!.clientX }
const onTouchEnd = (e: TouchEvent) => {
  const dx = e.changedTouches[0]!.clientX - touchStartX
  if (Math.abs(dx) < 40) return
  dx < 0 ? next() : prev()
}

onMounted(startTimer)
onBeforeUnmount(stopTimer)

// Если items меняется — сбрасываем на первый слайд
watch(() => props.items.length, () => { current.value = 0; startTimer() })
</script>

<template>
  <div
    class="relative w-full overflow-hidden select-none"
    @mouseenter="pause"
    @mouseleave="resume"
    @touchstart.passive="onTouchStart"
    @touchend.passive="onTouchEnd"
  >
    <!-- Лента слайдов -->
    <div
      class="flex transition-transform duration-500 ease-out will-change-transform pt-2"
      :style="{ transform: `translateX(-${current * 100}%)` }"
    >
		<div
			v-for="(item, i) in items"
			:key="i"
			class="w-full shrink-0 px-1"
		>
		<!-- Слот: передаём текущий item и индекс -->
			<NuxtImg :src="item.img"class="" />
		</div>
    </div>

    <!-- Стрелки -->
    <button
      v-if="items.length > 1"
      type="button"
      aria-label="Назад"
      class="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full
             bg-white/80 dark:bg-surface-900/80 backdrop-blur
             border border-surface-200 dark:border-surface-800
             text-brand-950 dark:text-white
             hover:bg-brand-500 hover:text-white hover:border-brand-500
             transition-colors shadow-sm flex items-center justify-center"
      @click="prev"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <button
      v-if="items.length > 1"
      type="button"
      aria-label="Вперёд"
      class="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full
             bg-white/80 dark:bg-surface-900/80 backdrop-blur
             border border-surface-200 dark:border-surface-800
             text-brand-950 dark:text-white
             hover:bg-brand-500 hover:text-white hover:border-brand-500
             transition-colors shadow-sm flex items-center justify-center"
      @click="next"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <!-- Точки -->
    <div
      v-if="items.length > 1 && props.showDots"
      class="flex justify-center gap-2 mt-4"
    >
      <button
        v-for="(_, i) in items"
        :key="i"
        type="button"
        :aria-label="`Слайд ${i + 1}`"
        class="h-2 rounded-full transition-all duration-300"
        :class="
          i === current
            ? 'w-6 bg-brand-500'
            : 'w-2 bg-surface-300 dark:bg-surface-700 hover:bg-brand-400'
        "
        @click="goTo(i)"
      />
    </div>
  </div>
</template>