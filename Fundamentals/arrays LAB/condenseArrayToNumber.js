function condenseArrayToNumber(input) {
    // let len = input.length
    if(input.length === 1){
        console.log(`${input} is already condensed to number`);
    }
    // let condensed = [];
    // while(condensed.length !== 1){
    //     for(i = 0; i < input.length - 1; i++){
    //     condensed[i] = input[i] + input[i+1];
    //     }
    // }
    let arr = [];
    while(arr.length > 1){
        let temp = input[i];
        let temp2 = input[i + 1];
        let sum = temp + temp2;
        arr.push(sum); 
            
        
    }
    console.log(arr);

}condenseArrayToNumber([2,10,3])
condenseArrayToNumber([5,0,4,1,2])