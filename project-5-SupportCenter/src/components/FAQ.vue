<template>
  <main class="faq">
    <h1>frequently asked question</h1>
    <div class="error" v-if="error">Can't load the questrion</div>
    <Loading v-if="loading"></Loading>
    <section class="list">
      <article v-for="question of questionList">
        <h2 v-html="question.title"></h2>
        <p v-html="question.content"></p>
      </article>
    </section>
  </main>
</template>
<script>
import RemoteData from "../mixins/RemoteData.js"

export default {
  data() {
    return {
      questions: [],
      error: null,
      loading: false,
      
    };
  },
  async created() {
    this.loading = true;
    try {
      this.questions =await this.$fetch('questions');
      console.log("in faq",this.questions);
      
      /*
      await fetch("http://localhost:3000/questions")
        .then(response => {
          if (response.ok) {
            var result = response.json();
            console.log("fetch success", result);
						//this.questions = response.json();
						
            return result;
          } else {
            return Promise.reject("error");
          }
        })
        .then(result => {
          console.log("result:", result);
          this.questions = result;
        });
        */
    } catch (e) {
      this.error = e;
		}
		this.loading = false;
  },
   mixins:[
    RemoteData({
      questionList:'questions'
    }),
  ],
  methods:{
    async fetchResource(key,url){
      try{
        this.$data[key] = await this.$fetch(url);
      }catch(e){
        console.log("fetchResouce",e)
      }
    }
  }
};
</script>