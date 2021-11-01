import { defineNuxtPlugin, NuxtApp } from '#app'
import { createI18n, useI18n } from 'vue-i18n'

export default defineNuxtPlugin((nuxt: NuxtApp) => {
	const i18n = createI18n({
		legacy: false,
		locale: 'en',
		fallbackLocale: 'en',
		messages: {
			en: {
				global: 'global message'
			}
		},
	})
	nuxt.vueApp.use(i18n)
	nuxt.provide('i18n', useI18n)
})
