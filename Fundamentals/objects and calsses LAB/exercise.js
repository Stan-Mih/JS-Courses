function createCats(cats) {

    class Cat  {
        constructor(catName,catAge){
        this.name = catName;
        this.age = catAge;
        }   
        meow() {
            console.log(`${this.name} age ${this.age} says Meow!`);
        }
    }
    for (const i of cats) {

        let [name, age] = i.split(" ")
        let newCat = new Cat (name,age);
        newCat.meow();
    }


}    
createCats(['Mellow 2', 'Tom 5'])
createCats(['Candy 1', 'Poppy 3', 'Nyx 2'])