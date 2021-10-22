<template>
	<div>
		{{ t('global') }}
		{{ t('component') }}
	</div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { t }: any = useI18n({
	locale: 'en',
	messages: {
		en: {
			component: 'component message'
		}
	},
})
</script>
