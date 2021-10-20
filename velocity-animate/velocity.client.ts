import { defineNuxtPlugin } from '#app'
import velocity from 'velocity-animate/velocity.min.js'

export default defineNuxtPlugin(nuxtApp => {
	nuxtApp.provide('velocity', velocity);
})

declare module '#app' {
	interface NuxtApp {
		$velocity(): any
	}
}
