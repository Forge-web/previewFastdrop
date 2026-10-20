<script setup lang="ts">
defineProps({
	name: { type: String, required: true },
	description: { type: String, default: '' },
	price: { type: String, required: true },
	period: { type: String, default: '/мес' },
	features: { type: Array, default: () => [] },
	ctaText: { type: String, default: 'Выбрать' },
	ctaHref: { type: String, default: '#signup' },
	featured: { type: Boolean, default: false },
})
</script>

<template>
  <div
    class="max-w-80 relative flex flex-col h-full p-8 rounded-2xl transition-all duration-300"
    :class="
      featured
        ? 'bg-brand-900/50 dark:bg-surface-900 text-white border-2 border-brand-500 shadow-xl shadow-brand-500/20 lg:scale-[1.03]'
        : 'bg-surface-200/80 dark:bg-surface-900/50 border border-surface-100 dark:border-surface-800 hover:border-brand-300 dark:hover:border-brand-700'
    "
  >
    <!-- Бейдж «Популярный» -->
    <div
      v-if="featured"
      class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-bold uppercase tracking-wide
             bg-brand-500 text-white rounded-full shadow-lg shadow-brand-500/40"
    >
      Популярный
    </div>

    <!-- Название и описание -->
    <div>
      <h3
        class="text-xl font-bold"
        :class="featured ? 'text-white' : 'text-brand-950 dark:text-white'"
      >
        {{ name }}
      </h3>
      <p
        class="mt-2 text-sm"
        :class="featured ? 'text-surface-200' : 'text-slate-600 dark:text-slate-400'"
      >
        {{ description }}
      </p>
    </div>

    <!-- Цена -->
    <div class="mt-6 flex items-baseline gap-1">
      <span
        class="text-4xl md:text-5xl font-extrabold tracking-tight"
        :class="featured ? 'text-white' : 'text-brand-950 dark:text-white'"
      >
        {{ price }}
      </span>
      <span
        class="text-sm font-medium"
        :class="featured ? 'text-surface-300' : 'text-slate-500 dark:text-slate-400'"
      >
        {{ period }}
      </span>
    </div>

    <!-- Кнопка -->
    <NuxtLink
      :to="ctaHref"
      class="mt-6 w-full inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm font-semibold
             transition-colors"
      :class="
        featured
          ? 'bg-brand-500 text-white hover:bg-brand-600'
          : 'bg-brand-950 dark:bg-brand-500 text-white hover:bg-brand-900 dark:hover:bg-brand-600'
      "
    >
      {{ ctaText }}
    </NuxtLink>

    <!-- Список возможностей -->
    <ul
      class="mt-8 space-y-3 text-sm"
      :class="featured ? 'text-surface-200' : 'text-slate-600 dark:text-slate-400'"
    >
      <li
        v-for="(feature, i) in features"
        :key="i"
        class="flex items-start gap-3"
      >
        <svg
          class="w-5 h-5 shrink-0 mt-0.5"
          :class="featured ? 'text-brand-400' : 'text-brand-500'"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
        </svg>
        <span>{{ feature }}</span>
      </li>
    </ul>
  </div>
</template>