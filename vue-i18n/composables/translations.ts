export function translations(options: object = {}): object {
	const i18n = useNuxtApp().$i18n

	if(i18n) {
		return i18n(options)
	}
	return {
		t: () => {}
	}
}
