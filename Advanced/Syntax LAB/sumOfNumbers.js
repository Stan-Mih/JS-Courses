function sumOfNumbers(a, b) {

    let numA = Number(a);
    let numB = Number(b);

    let sum = 0;

    for(let i = numA; i<=numB; i++){
        sum += i;
    }
    return sum;

}sumOfNumbers('1', '5')
sumOfNumbers('-8', '20')