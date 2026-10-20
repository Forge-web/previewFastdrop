<script setup lang="ts">
	const isMenuOpen = ref(false);
	const urlToFastdrop = ref(useAppConfig().urlToFastdrop);
</script>

<template>
  <header class="sticky top-0 z-50 w-full bg-white/80 dark:bg-surface-950/80 backdrop-blur-md border-b border-surface-100 dark:border-surface-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Логотип -->
        <NuxtLink to="/" class="flex items-center gap-2 font-bold text-xl text-brand-950 dark:text-white">
          <span class="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center text-white font-black">F</span>
          <span>Fastdrop</span>
        </NuxtLink>

        <!-- Навигация для десктопа -->
        <nav class="hidden md:flex items-center space-x-8">
          <NuxtLink to="#features" class="hover:text-brand-500 transition-colors">Возможности</NuxtLink>
          <NuxtLink to="#use-cases" class="hover:text-brand-500 transition-colors">Сценарии</NuxtLink>
          <NuxtLink to="#pricing" class="hover:text-brand-500 transition-colors">Тарифы</NuxtLink>
        </nav>

        <!-- Кнопки действий -->
        <div class="hidden md:flex items-center space-x-4">
          <NuxtLink :to="urlToFastdrop" class="px-4 py-2 text-sm font-semibold text-white bg-brand-500 rounded-lg hover:bg-brand-600 transition-colors shadow-sm">
            	Попробовать
          </NuxtLink>
        </div>

        <!-- Кнопка мобильного меню (бургер) -->
        <button @click="isMenuOpen = !isMenuOpen" class="md:hidden p-2 text-slate-600 dark:text-slate-300">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>
    <!-- Мобильное меню -->
    <div v-if="isMenuOpen" class="md:hidden border-t border-surface-100 dark:border-surface-800">
      <nav class="px-4 py-4 space-y-3 bg-white dark:bg-surface-950">
        <NuxtLink to="#features" class="block hover:text-brand-500">Возможности</NuxtLink>
        <NuxtLink to="#use-cases" class="block hover:text-brand-500">Сценарии</NuxtLink>
        <NuxtLink to="#pricing" class="block hover:text-brand-500">Тарифы</NuxtLink>
        <hr class="border-surface-100 dark:border-surface-800 my-2"/>
        <NuxtLink :to="urlToFastdrop" class="block w-full text-center px-4 py-2 font-semibold text-white bg-brand-500 rounded-lg">
			Попробовать
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>