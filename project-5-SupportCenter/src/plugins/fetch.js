let baseUrl;
export async function $fetch(url, options) {
    const finalOptions = Object.assign({}, {
        headers: {
            'Content-Type': 'application/json'
        },
        credenital: 'include',
    }, options);
    const response = await fetch(`${baseUrl}${url}`, finalOptions);

    if (response.ok) {
        const data = await response.json();
        console.log("fetch.js,data: ", data);
        return data;
    } else {
        const message = await response.text();
        const error = new Error(message);
        error.response = response;
        throw error;
    }
}
async function signup() {
    await this.$fetch('signup', {
        method: 'POST',
        body: JSON.stringify({
            username: this.username,
            password: this.password,
            email: this.email,
        })
    })
    this.mode = 'login'
}
export default {
    install(Vue, options) {
        console.log("fetch js install", options)
        baseUrl = options.baseUrl;
        Vue.prototype.$fetch = $fetch;
    }
}