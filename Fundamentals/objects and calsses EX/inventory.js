function inventory(arr) {

    
    class Hero {
        constructor(name, lvl, inventory){
            this.name = name;
            this.lvl = Number(lvl);
            this.inventory = inventory;

        }
    }
    let heroCollection = [];
    arr.forEach(line => {
        let [name, lvl, inventory] = line.split(" / ");
        let newHero = new Hero (name, lvl, inventory);
        heroCollection.push(newHero);
    });
    
    heroCollection.sort((a, b) => a.lvl - b.lvl);

    heroCollection.forEach((hero) => {
        console.log(`Hero: ${hero.name}\nlevel => ${hero.lvl}\nitems => ${hero.inventory}`);       
    })
    
}inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    
    )
inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ]
    
    )