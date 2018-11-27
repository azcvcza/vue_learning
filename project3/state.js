var state = {
    //worldRatio:getWorldRatio(),
    turn: 1,
    players: [
        { name: 'Anne of Cleves' },
        { name: 'William the Bald' },
    ],
    currentPlayerIndex: Math.round(Math.random()),
    cards: [{
        id: 'miracle',
        type: 'special',
        title: 'Miracle',
        description: 'Everyone:<br>Gather 3 <b>Food</b><br>Repair 3 <b>Damage</b>',
        play(player, opponent) {
            player.food += 3
            player.health += 3
            opponent.food += 3
            opponent.health += 3
        },
    }, ],

}