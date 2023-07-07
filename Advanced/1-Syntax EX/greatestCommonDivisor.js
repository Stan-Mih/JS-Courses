function greatestCommonDivisor(num1, num2) {

    let greaterNumber = Math.max(num1,num2);
    let comonDivisors = [];
    for(let i = 2   ; i <= greaterNumber; i++){
        if(num1 % i === 0 && num2 % i === 0){
            comonDivisors.push(i);
        }
    }

console.log(Math.max(comonDivisors));

}greatestCommonDivisor(15, 5)
greatestCommonDivisor(2154, 458)