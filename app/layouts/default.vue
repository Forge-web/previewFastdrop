<script setup lang="ts">
const { isDark } = useSystemTheme();
</script>

<template>
	<div :class="isDark ? 'dark' : ''" class="flex flex-col min-h-screen bg-white dark:bg-black/95 text-slate-800 dark:text-slate-200 font-sans">
		<AppHeader />
			<main class="flex-grow">
				<slot />
			</main>
		<AppFooter />
	</div>
</template>