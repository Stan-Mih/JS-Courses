function inventory(input) {

    const storage = [];

    class Hero {
        constructor(name, level, items){
            this.name = name;
            this.level = level;
            this.items = items;
        }        
    }
    input.forEach(hero => {
        const heroInfo = hero.split(" / ");
        const [name,level,items] = heroInfo;       
        let newHero = new Hero(name, level, items)
        storage.push(newHero);
    });
    const sorted = storage.sort((a,b) => a.level-b.level);
    sorted.forEach(hero => {
        console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`);
    });
    
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

