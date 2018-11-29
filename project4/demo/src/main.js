import Vue from 'vue'
import 'babel-polyfill'
import movies from './movies.vue'
new Vue({
    el: '#app',
    ...movies,
})