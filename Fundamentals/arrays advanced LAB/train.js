function train(arr) {

    let trainWagons = arr.shift().split(" ").map(Number);
    let wagonCapacity = Number(arr.shift())

        for(let i = 0; i < arr.length; i++){

            let comandNum = arr[i].split(" ");

            if(comandNum[0] === "Add"){
                trainWagons.push(Number(comandNum[1]));
            }else{
                for(u = 0; u < trainWagons.length; u++){
                    if(Number(comandNum[0]) + trainWagons[u] <= wagonCapacity){
                        trainWagons[u] += Number(comandNum[0]);
                        break;
                    }
                }
            }
            
        }
    
    console.log(trainWagons.join(" "));

}train(['32 54 21 12 4 0 23',
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