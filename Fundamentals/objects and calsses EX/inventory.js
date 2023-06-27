function inventory(arr) {

    
    class Hero {
        constructor(name, lvl, invertory){
            this.name = name;
            this.lvl = Number(lvl);
            this.invertory = invertory;

        }
    }
    let heroCollection = [];
    arr.forEach(line => {
        let [name, lvl, invertory] = line.split(" / ");
        let newHero = new Hero (name, lvl, invertory);
        heroCollection.push(newHero);
    });
    
    heroCollection.sort((a, b) => a.lvl - b.lvl);

    heroCollection.forEach((Hero) => {
        console.log(`Hero: ${Hero.name}`);
        console.log(`level => ${Hero.lvl}`);
        console.log(`items => ${Hero.inventory}`);
    })
    
}inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )
// inventory([
//     'Batman / 2 / Banana, Gun',
//     'Superman / 18 / Sword',
//     'Poppy / 28 / Sentinel, Antara'
//     ]
//     )