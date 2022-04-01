let person = {
    name: 'Vasiliy',
    surname: 'Zaytsev',
    year: 1915,
    adress: 'Eleninka, Russia',
    work: {
        profession: 'sniper',
        skill: 'headshot'
    },
    weapon: 'Драгунова',
    rewards: ['За оборону Сталинграда', 'За отвагу', 'Орден Красного Знамени'],
    fullName() {
        return this.name + ' ' + this.surname;
    },
    age() {
        if (this.year < 1930) return 'R.I.P'
        return new Date().getFullYear() - this.year;
    }
}
console.log(person.age())