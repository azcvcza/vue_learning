new Vue({
    name: 'game',
    el: '#app',
    template: `<div id="app">
        <top-bar :turn="turn" :players="players" :currentPlayerIndex="currentPlayerIndex"/>
        <card :def="testCard"/>
    </div>`,
    data: state,
    computed: {
        testCard() {
            return cards.archers;
        }
    }
})

/*
window.addEventListener('resize',()=>{
    state.worldRatio = getWorldRatio();
})
*/