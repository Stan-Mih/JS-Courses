function piccolo(arr) {

    let lot = {};

    for(let i of arr){
        let [direction, car] = i.split(", ");
        if(!lot[car]){
            lot[car] = direction;
        }else{delete lot[car]};
    }
    let toEntries = Object.entries(lot);
    let sorted = toEntries.sort((a,b) => a[0].localeCompare(b[0]));
    
    if(Object.keys(lot).length === 0){
        console.log("Parking Lot is Empty");
    }else{
        for(let i of sorted){
            console.log(i[0]);
        }
    }
}piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']

)
console.log("+++++++++++++++++++++");
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
)