new Vue({
    name: 'game',
    el: '#app',
    template: `<div id="app">
        <top-bar :turn="turn" :players="players" :currentPlayerIndex="currentPlayerIndex"/>
        <card :def="testCard" @play="handlePlay"/>
    </div>`,
    data: state,
    computed: {
        testCard() {
            return cards.archers;
        }
    },
    methods: {
        handlePlay(color, number) {
            console.log("receive eve,color:", color, "num:", number);
        } //sucess
    }
})

/*
window.addEventListener('resize',()=>{
    state.worldRatio = getWorldRatio();
})
*/