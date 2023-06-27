function addAndSubtract(a, b, c) {
    
    // let sumOfAAndB = sum(a, b); 
    // let subtraction = sub(sumOfAAndB , c)

    // console.log(subtraction);

    // function sum(a, b){
    //     return a + b;
    // }
    // function sub(firstResult, tirdNum){
    //     return firstResult - tirdNum;
    // }

    let sum = (firstNum, secondNum) => {   // function expression
        return firstNum + secondNum
    };
    let sub = (subtraced, c) => {   // function expression
        return subtraced - c};

    let sumOfAAndB = sum(a, b);
    let subtraced = sub(sumOfAAndB, c);

    console.log(subtraced);


}addAndSubtract(23, 6, 10);
addAndSubtract(1,17,30);
addAndSubtract(42, 58, 100)