<template>
  <footer class="bg-surface-50 dark:bg-surface-950 border-t border-surface-100 dark:border-surface-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="flex items-center gap-2 text-brand-950 dark:text-white font-bold">
          <span class="w-6 h-6 bg-brand-500 rounded flex items-center justify-center text-white text-xs font-black">F</span>
          <span>Fastdrop</span>
        </div>
        <nav class="flex gap-6 text-sm text-slate-600 dark:text-slate-400">
          <NuxtLink to="#" class="hover:text-brand-500">Политика конфиденциальности</NuxtLink>
          <NuxtLink to="#" class="hover:text-brand-500">Условия использования</NuxtLink>
          <NuxtLink to="#" class="hover:text-brand-500">Контакты</NuxtLink>
        </nav>
        <p class="text-sm text-slate-500 dark:text-slate-500">&copy; {{ new Date().getFullYear() }} Fastdrop. Все права защищены.</p>
      </div>
    </div>
  </footer>
</template>