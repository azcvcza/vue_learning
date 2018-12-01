import 'babel-polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';
import AppLayout from './components/AppLayout.vue';
import router from './router'
import './global-components'
import VueFetch, { $fetch } from './plugins/fetch.js'
import state from './state.js'
import VueState from "./plugins/state.js"
import * as filters from './filter.js'
Vue.use(VueRouter); //主页面也需要引入 vuerouter才行，不然就报错；
Vue.use(router); //之前引入失败，因为名字不对，import了VueRouter
Vue.use(VueFetch, { baseUrl: 'http://localhost:3000/' });

Vue.use(VueState, state);
//bcrypt => bcryptjs + user.js里修改 import，但只能不同文件夹启动，合并出粗
//console.log("null: " + i === null, "false: " + i === false, i)
console.log("in main state:", state)
for (const key in filters) {
    Vue.filter(key, filters[key]);
}
async function main() {
    // Get user info
    try {
        state.user = await $fetch('user')
        console.log(state.user, "in main.js main state.user")
    } catch (e) {
        console.warn(e)
    }
    // Launch app
    new Vue({
        el: '#app',
        data: state,
        router,
        render: h => h(AppLayout),
    })
}
main()