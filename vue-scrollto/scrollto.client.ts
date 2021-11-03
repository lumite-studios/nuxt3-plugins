import { defineNuxtPlugin, NuxtApp } from '#app'
import VueScrollTo from 'vue-scrollto'

export default defineNuxtPlugin((nuxt: NuxtApp) => {
	nuxt.vueApp.use(VueScrollTo, {})

	nuxt.provide('scrollTo', VueScrollTo.scrollTo)
})
