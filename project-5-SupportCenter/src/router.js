import Vue from 'vue';
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import FAQ from './components/FAQ.vue'


const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/faq', name: 'faq', component: FAQ },
    //{ path: '*', component: NotFound },
];
//componet: xxx ; xxx can't be a string;
const router = new VueRouter({
    routes,
    mode: 'history',
})
export default router;