function heroicInventory(arr) {   
    const heroes = [];

    arr.forEach(el => {       
        const [name, exp, i] = el.split(" / ");
        items = i.split(', ');

        const hero = {
            name,
            level : Number(exp),
            items,
        }   
        heroes.push(hero);
    });
    const strings = JSON.stringify(heroes);
    console.log(strings);  
    

}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
)
heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade'])
