function christmassTree(input) {

    

    for(let i = 0; i <= input; i++){
        let stars = '*'.repeat(i);
        let spaces = ' '.repeat(input-i)
        let body = ' | ';
        let print = spaces+ stars +body + stars+ spaces;
        console.log(print);
    }
   

}christmassTree(15)

