import 'babel-polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';
import AppLayout from './components/AppLayout.vue';
import router from './router'
Vue.use(VueRouter); //主页面也需要引入 vuerouter才行，不然就报错；
Vue.use(router); //之前引入失败，因为名字不对，import了VueRouter
//console.log("null: " + i === null, "false: " + i === false, i)
new Vue({
    el: "#app",
    router,
    render: h => h(AppLayout),

})