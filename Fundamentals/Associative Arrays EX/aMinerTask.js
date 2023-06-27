function aMinerTask(arr) {

    const voult = {};
    const arrL = arr.length;
    
    for(let i = 0; i < arrL; i++){
        let type = arr[i];
        let ammount = Number(arr[i + 1]);
        i++;
        if(!voult[type]){
            voult[type] = ammount;
        }else{
            voult[type] += ammount 
        }
    }
    for(let key in voult){
        console.log(`${key} -> ${voult[key]}`);
    }
}aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]
    )
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    )