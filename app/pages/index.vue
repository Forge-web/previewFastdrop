<script setup lang="ts">
import OpportunityCard from '~/components/OpportunityCard.vue';

	const urlToFastdrop = useAppConfig().urlToFastdrop;

	const opportunityItems = [
		{
			label: "Легкая передача.",
			icon: "grommet-icons:document-upload",
			desc: "Дла начала передачи файлов, вам нужно зарегистрироваться. Вы можете использовать не существующую почту, но помните, что вы не сможете восстановить пароль в этом случае"
		},
		{
			label: "Передавай не только файлы, но и текст",
			icon: "grommet-icons:text-align-center",
			desc: "Вы можете передавать текст, если это удобнее сделать не файлом. Просто создайте пост, укажите будет ли он публичным и сохраните. Готово"
		},
		{
			label: "Не светити файлы в мессенджере. Мы не храним историю",
			icon: "hugeicons:anonymous",
			desc: "Известно, что мессенджеры собирабт историю и хранят ее, не всегда надежно. Мы не храним твои файлы долго, всего 1 час. Загрузил, скачал, удалил"
		}
	];

	const sliderItems = [
		{img: "imgs/home.png"},
		{img: "imgs/profile.png"},
		{img: "imgs/storage.png"},
		{img: "imgs/test-storage.png"},
		{img: "imgs/upload.png"},
		{img: "imgs/test-upload.png"},
		{img: "imgs/test-empty-post.png"},
		{img: "imgs/test-public-and-private-post.png"},
		
	]

</script>

<template>
  <div class="space-y-24 md:space-y-32 py-16 md:py-24">
    <!-- Hero Секция -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<h1 class="text-4xl md:text-6xl font-extrabold tracking-tight text-brand-950 dark:text-white">
			Легкий обмен.<br/>
			<span class="text-brand-500">Без лишних усилий.</span>
		</h1>
		<p class="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400">
			Fastdrop — это легкий способ передачи файлов и текста между устройствами. Никаких аккаунтов(почти), никаких следов.
		</p>
		<div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
			<NuxtLink :to="urlToFastdrop" class="px-8 py-3.5 text-base font-semibold text-white bg-brand-500 dark:bg-brand-500/40 hover:dark:bg-brand-500/70 rounded-xl hover:bg-brand-600 transition-colors shadow-lg shadow-brand-500/25">
				Начать бесплатно
			</NuxtLink>
			<NuxtLink to="#features" class="px-8 py-3.5 text-base font-semibold text-brand-950 dark:text-white bg-surface-100 dark:bg-surface-800 rounded-xl hover:bg-surface-200 dark:hover:bg-surface-700 transition-colors">
				Узнать больше
			</NuxtLink>
      	</div>
    </section>

    <!-- Секция "Возможности" -->
    <section id="features" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-brand-950 dark:text-white">Всё, что нужно для быстрой работы</h2>
			<p class="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Создан для скорости, безопасности и простоты.</p>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<OpportunityCard v-for="item in opportunityItems" :item="item" />
		</div>
    </section>

    <!-- Секция "Сценарии использования" -->
    <section id="use-cases" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="bg-brand-950 dark:bg-surface-900/50 rounded-3xl p-8 md:p-16 text-center md:text-left">
			<div class="flex flex-col items-center gap-2">
				
				<h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Для тех, кто ценит время</h2>
				
				<div class="flex justify-center">
					<!-- Placeholder для иллюстрации или скриншота -->
					<div class="w-full max-w-sm aspect-video bg-brand-900/50 rounded-xl border border-brand-800 flex items-center justify-center text-brand-700">
						<!-- <span class="text-sm font-mono">Пример интерфейса</span> -->
						<AppSlider :items="sliderItems" />
					</div>
				</div>
				
				<ul class="space-y-4 text-surface-200">
					<li class="flex items-start gap-3">
					<span class="text-brand-400 mt-1">✓</span>
					<span><strong>Студентам:</strong> Не нужно заходить в аккаунт мессенджера на школьном пк и бояться, что данные украдут.</span>
					</li>
					<li class="flex items-start gap-3">
					<span class="text-brand-400 mt-1">✓</span>
					<span><strong>Учителям:</strong> Больше не нужно думать, загрузит ли мессенджер у студента, все, что нужно, это загрузить файл и сказать студентам Ник.</span>
					</li>
				</ul>
				
			</div>
		</div>
    </section>

	<section id="pricing" class="max-w-7xl mx-auto mt-5 px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-brand-950 dark:text-white">Наши цены</h2>
		</div>
		<div class="flex justify-center w-full">
			<PricingCard
				name="Free"
				description="Для любых задач."
				price="0 ₽"
				period="/навсегда"
				:features="[
				'Хранение файлы до 100 МБ',
				'Разовая загрузка файла до 50 Мб',
				]"
				cta-text="Начать бесплатно"
				:cta-href="useAppConfig().urlToFastdrop"
			/>
		</div>
	</section>
    <!-- CTA Секция -->
    <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-brand-950 dark:text-white">Готовы ускориться?</h2>
      <p class="mt-4 text-lg text-slate-600 dark:text-slate-400">Присоединяйтесь к тысячам пользователей, которые уже упростили свою работу с файлами.</p>
      <div class="mt-8">
        <NuxtLink :to="urlToFastdrop + '/register'" class="inline-block px-10 py-4 text-base font-bold text-white bg-brand-500 dark:bg-brand-500/40 rounded-xl hover:bg-brand-600 hover:dark:bg-brand-500/70 transition-transform hover:scale-105 shadow-xl shadow-brand-500/30">
			Создать бесплатный аккаунт
        </NuxtLink>
      </div>
    </section>
  </div>
</template>