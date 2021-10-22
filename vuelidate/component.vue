<template>
	<div>
		<input v-model="form.email_address" />
		<div v-for="error of validate.form.email_address.$errors" :key="error.$uid">
			<div class="error-msg">
				{{ error.$message }}
			</div>
		</div>

		<button @click="submit">Submit</button>
	</div>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

const form = ref({
	email_address: '' as string,
}) as Ref
const rules = ref({
	form: {
		email_address: { required, email },
	}
}) as Ref
const validate = useVuelidate(rules, form)

function submit(): void {
	this.validate.$validate()
}
</script>
