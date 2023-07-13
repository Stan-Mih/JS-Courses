function train(param) {

    let passangersOnTrain = param
    .shift()
    .split(" ")
    .map(Number);

    let capacity = Number(param.shift());
    let numOfWagons = passangersOnTrain.length

    for (const element of param) {
        if(Number(element)){
            let passangersToBoard = Number(element);
            
            for(let i = 0; i < numOfWagons; i++) {
                let peopleInWagon = passangersOnTrain[i];
                let leftover = (peopleInWagon + passangersToBoard) - capacity; 

                if(leftover <= 0 ){
                    passangersOnTrain[i] = peopleInWagon += passangersToBoard;
                    break;             
                }else {

                }             
            }         
        }
        else {
        let addWagon = element.split(" ");
        passangersOnTrain.push(Number(addWagon[1]));
        }
    }
}
train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
)
train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']
)