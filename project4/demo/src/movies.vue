
<template>
    <ul class="movies">
        <movie v-for="movie of movies" :key="movie.id" :movie="movie"></movie>
    </ul>
</template>
<script>
import movie from './movie.vue'
    export default{
        data(){
            return{
                movies:[
                    {id:0,title:"Star War11"},
                    {id:1,title:"Star War1"},
                ]
            }
        },
        components:{
            movie,
        }
    }
</script>