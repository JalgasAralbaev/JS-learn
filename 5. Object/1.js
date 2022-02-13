const hero = {
    name: 'Slark',
    lvl: 1,
    hp: 549,
    mp: 208,
    damage: 60,
    attackRange: 128,
    role: 'carry',
    abilities: {
        darkPath: {
            damage: 200,
            cooldown: 9,
            maxLvl: 4,
            mp: 55,
            type: 'active',
        },
        pounce: {
            damage: 800,
            cooldown: 10,
            maxLvl: 4,
            mp: 75,
            type: 'active'
        },
        essenceShift: {
            maxLvl: 4,
            mp: 0,
            type: 'passive',
        },
        shadowDance: {
            cooldown: 120,
            maxLvl: 4,
            mp: 60,
            type: 'active',
        }
    },
    say: function () {
        let random = 1 + Math.random() * (4 - 1);
        random = Math.round(random);
        switch (random) {
            case 1:
                return  console.log('Лучше бы я остался в Тёмном рифе.');
            case 2:
                return console.log('Slark положил на тебя глаз.');
            case 3:
                return  console.log('Ты пожалеешь, что увидел меня.');
            case 4:
                return console.log('Тьма из глубин.');
        }
    },
}
hero.say();