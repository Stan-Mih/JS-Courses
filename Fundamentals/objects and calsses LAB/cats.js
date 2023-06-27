function cats(arr) {

    class Cat {
        constructor(name, age){
            this.name = name;
            this.age = age;
        }  
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`); 
        }
        
    }
    
    for(i of arr){

        let localCat = i.split(" ");
        let age = +(localCat[1]);
        let name = localCat[0];

        let newCat = new Cat (name, age);
        newCat.meow();
    }  

}cats(['Mellow 2', 'Tom 5'])
cats(['Candy 1', 'Poppy 3', 'Nyx 2'])