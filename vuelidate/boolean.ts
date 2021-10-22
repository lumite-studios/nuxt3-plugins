export default {
	$validator: function(value: any) {
		return typeof value === 'boolean'
	},
	$params: { type: 'boolean' }
}
