# nuxt3-plugins

A personal list of packages that I've managed to get working as nuxt3 plugins.

## Notes
- If you are using Laravel Homestead and HMR is not working add the below to the `nuxt.config.ts`:
```ts
vite: {
	server: {
		watch: {
			usePolling: true
		}
	}
}
```
