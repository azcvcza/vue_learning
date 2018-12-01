export default {
    install(Vue, state) {
        Object.defineProperty(Vue.prototype, "$state", {
                get: () => { state }
            })
            //console.log("in state.js,install", Vue.prototype.get)
    }
}