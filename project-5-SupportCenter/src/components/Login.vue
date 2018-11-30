<template>
	<main class="login">
		<h1>Please to continue</h1>
		<form>
			<FormInput name="username" :value="text" placehoder="Username" v-model="username"></FormInput>
		</form>
	</main>
</template>
<script>
	export default{
		data(){
			return{
				username:'',
			}
		},
		model:{
			prop:{
				text:{
					required:true,
				}
			},
			event:'update',
		}
	}
</script>