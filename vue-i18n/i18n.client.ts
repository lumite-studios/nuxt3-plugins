import { defineNuxtPlugin } from '#app'
import { createI18n } from 'vue-i18n'

export default defineNuxtPlugin((nuxtApp: any) => {
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
	nuxtApp.vueApp.use(i18n);
})
