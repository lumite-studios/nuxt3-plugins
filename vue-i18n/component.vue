<template>
	<div>
		{{ t('global') }}
		{{ t('component') }}
	</div>
</template>

<script lang="ts" setup>
import { translations } from '~/composables/translations'

const { t }: any = translations({
	locale: 'en',
	messages: {
		en: {
			component: 'component message'
		}
	},
})
</script>
