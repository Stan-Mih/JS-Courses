function ladybugs(arr){

    let index = 0;
    let fieldSize = arr[index];
    index++;
    let bugsPossitipons = arr[index].split(" ");
    index++;

    let bugs = [];
    for(let i = 0; i < fieldSize; i++){  //creating bugs field
        bugs.push(0);
    }
    bugsPossitipons.forEach(element => { //populating with bugs
        bugs[+element] = 1;
    });

    for(let i = index; i < arr.length; i++){  // bugs moovement
        let bugMoovement = arr[i].split(" ");
        let bugStart = bugMoovement[0];
        let bugDirection = bugMoovement[1];
        let bugEnd = bugMoovement[2];

    }
    

}ladybugs([ 3, '0 1','0 right 1','2 right 1' ])
//ladybugs([ 3, '0 1 2','0 right 1','1 right 1','2 right 1'])