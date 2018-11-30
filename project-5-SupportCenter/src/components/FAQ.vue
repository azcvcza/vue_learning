<template>
    <main class="faq">
		<h1>frequently asked question</h1>
		<div class="error" v-if="error">Can't load the questrion</div>
		<section class="list">
			<article v-for="question of questions">
				
				<h2 v-html="question.title"></h2>
        <p v-html="question.content"></p>
			</article>
		</section>	
	</main>
</template>
<script>
	export default{
		data(){
			return{
				questions:[],
				error:null,
			}
		},
		created(){
			fetch('http://localhost:3000/questions').then(response=>{
				if(response.ok){
					var result = response.json();
					console.log("fetch success",result);
					//this.questions = response.json();
					return result;
				}else{
					return Promise.reject('error');
				}
			}).then(result =>{
				console.log("result:",result)
				this.questions = result;
			}).catch(e=>{
				this.error = e;
			})
		}
	}
</script>