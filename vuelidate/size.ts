import { helpers } from '@vuelidate/validators'

export default function(amount: number) {
	return {
		$validator: function(value: string) {
			return !helpers.req(value) || value.length === amount
		},
		$message: ({ $params }) => `This field should be exactly ${$params.amount} long.`,
		$params: { amount, type: 'size' }
	}
}
