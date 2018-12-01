let baseUrl;
import state from '../state.js'
import router from '../router.js'
export async function $fetch(url, options) {
    const finalOptions = Object.assign({}, {
        headers: {
            'Content-Type': 'application/json'
        },
        credenital: 'include',
    }, options);
    const response = await fetch(`${baseUrl}${url}`, finalOptions);
    if (response) {
        console.log("fetch.js,response", response);
    }

    if (response.ok) {
        const data = await response.json();
        console.log("fetch.js,data: ", data);
        return data;
    } else if (response.status === 403) {
        state.user = null;
        if (router.currentRoute.matched.some(r => r.meta.private)) {
            router.replace({
                name: 'login',
                params: {
                    wantedRoute: router.currentRoute.fullPath,
                }
            })
        }
    } else {
        const message = await response.text();
        const error = new Error(message);
        error.response = response;
        throw error;
    }
}

export default {
    install(Vue, options) {
        console.log("fetch js install", options)
        baseUrl = options.baseUrl;
        Vue.prototype.$fetch = $fetch;
    }
}