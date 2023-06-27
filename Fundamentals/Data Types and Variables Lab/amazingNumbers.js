function amazingNumbers(num) {
    let string = num.toString()
    let sum = 0;
    for(i = 0; i < string.length; i++){
        sum += +(string[i]);
    }
    let result = sum.toString().includes("9");
    result ? console.log(`${num} Amazing? True`) : console.log(`${num} Amazing? False`)
}amazingNumbers(1233)