import 'babel-polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';
import AppLayout from './components/AppLayout.vue';
import router from './router'
import './global-components'
import VueFetch from './plugins/fetch.js'
import state from './state.js'
import VueState from "./plugins/state.js"
Vue.use(VueRouter); //主页面也需要引入 vuerouter才行，不然就报错；
Vue.use(router); //之前引入失败，因为名字不对，import了VueRouter
Vue.use(VueFetch, { baseUrl: 'http://localhost:3000/' });
Vue.use(VueState, state);
//bcrypt => bcryptjs + user.js里修改 import，但只能不同文件夹启动，合并出粗
//console.log("null: " + i === null, "false: " + i === false, i)

new Vue({
    el: "#app",
    router,
    render: h => h(AppLayout),
    data: state,

})