import { defineNuxtPlugin } from '#app'
import useVuelidate from '@vuelidate/core'

export default defineNuxtPlugin((nuxtApp: any) => {
	nuxtApp.provide('v', useVuelidate);
})

declare module '#app' {
	interface NuxtApp {
		$v(): any
	}
}
