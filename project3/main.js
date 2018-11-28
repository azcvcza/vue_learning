new Vue({
    name: 'game',
    el: '#app',
    template: `<div id="app">
        <top-bar :turn="turn" :players="players" :currentPlayerIndex="currentPlayerIndex"/>
       <hand :cards="testHand"/>
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
        }, //sucess,
        createTestHand() {
            const cards = []
                // Get the possible ids
            const ids = Object.keys(cards)
                // Draw 5 cards
            for (let i = 0; i < 5; i++) {
                cards.push(this.testDrawCard()) //不绑定this无法调用。。。
            }
            console.log(cards)
            return cards
        },
        testDrawCard() {
            const ids = Object.keys(cards)
            const randomId = ids[Math.floor(Math.random() * ids.length)];

            // Return a new card with this definition
            return {
                // Unique id for the card
                uid: cardUid++,
                // Id of the definition
                id: randomId,
                // Definition object
                def: cards[randomId],
            }
        }
    },
    created() {
        this.testHand = this.createTestHand();
        //console.log(this.$data.players)

    },

})


window.addEventListener('resize', () => {
    state.worldRatio = getWorldRatio()
})