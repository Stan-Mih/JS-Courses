        function evenAndOddSubtraction(input){
    let addSum = 0;
    let evenSum = 0;

    for(i = 0; i < input.length; i++){
        if(input[i] % 2 === 0){
            evenSum += input[i];
        }else if (input[i] % 2 !== 0){
            addSum += input[i];
        }
    }
    // console.log(addSum - evenSum);
    // if(addSum > evenSum){
        
    // }else{
        console.log(evenSum - addSum);
    // }
    
}evenAndOddSubtraction([3,5,7,9])