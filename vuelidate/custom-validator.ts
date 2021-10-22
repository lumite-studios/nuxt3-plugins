import { createI18nMessage } from '@vuelidate/validators'
import { createI18n } from 'vue-i18n'
import booleanValidator from './boolean'
import sizeValidator from './size'

const i18n = createI18n({
	locale: 'en',
	messages: {
		en: {
			validations: {
				boolean: 'The {property} field must be a boolean.',
				size: 'The {property} field must be {amount} characters long.',
			}
		}
	}
})
const t = i18n.global.t
const withI18nMessage = createI18nMessage({ t })

export const boolean = withI18nMessage(booleanValidator)
export const size = withI18nMessage(sizeValidator, { withArguments: true })
