function oddAndEvenSum(input) {
    let inputStr = input.toString();
    let oddSum = 0;
    let evenSum = 0;

    for(char of inputStr){
        let temp = +(char);
        if(temp % 2 !== 0){ 
            oddSum += temp;
        }else{
            evenSum += temp;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}oddAndEvenSum(1000435)
oddAndEvenSum(3495892137259234)