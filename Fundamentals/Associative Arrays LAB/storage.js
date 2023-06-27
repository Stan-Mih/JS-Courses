function storage(arr) {
    
    let map = new Map();
    
    for(let i of arr){
        let [item, qty] = i.split(" ");
        if(map.has(item)){
            let sum = Number(map.get(item)) + Number(qty);
            map.set(item, sum);
        }else{
            map.set(item, qty);
        }
    }
    let ierableKeys = map.keys();
    for(let key of ierableKeys){
        console.log(`${key} -> ${map.get(key)}`);
    }
    
}storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)
console.log('=========');
storage(['apple 50',
'apple 61',
'coffee 115',
'coffee 40']
)