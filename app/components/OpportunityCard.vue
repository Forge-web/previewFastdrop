<script setup lang="ts">

const props = defineProps<{
	item: {
		label: string,
		icon: string,
		desc: string
	}
}>();

</script>

<template>

<div class="p-8 bg-surface-50 dark:bg-surface-900/50 rounded-2xl border border-surface-100 dark:border-surface-800">
	<div class="w-12 h-12 bg-brand-500/10 dark:bg-brand-500/20 rounded-xl flex items-center justify-center text-brand-500 mb-6">
		<Icon :name="props.item.icon" size="24" />
	</div>
	<h3 class="text-xl font-semibold text-brand-950 dark:text-white mb-3">
		{{ props.item.label }}
	</h3>
	<p class="text-slate-600 dark:text-slate-400">
		{{ props.item.desc }}
	</p>
</div>

</template>