import { helpers } from '@vuelidate/validators'

export default function(amount: number) {
	return {
		$validator: function(value: string) {
			return !helpers.req(value) || value.length === amount
		},
		$params: { amount, type: 'size' }
	}
}
