let baseUrl;
export async function $fetch(url) {
    const response = await fetch(`${baseUrl}${url}`);
    if (response.ok) {
        const data = await response.json();
        console.log("fetch.js,data: ", data);
        return data;
    } else {
        const error = new Error('error');
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