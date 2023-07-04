function calculator(num1, operator, num2) {

let calc = {
    "+" : (num1,num2) => num1 + num2,
    "-" : (num1,num2) => num1 - num2,
    "/" : (num1,num2) => num1 / num2,
    "*" : (num1,num2) => num1 * num2,
}
console.log(calc[operator](num1,num2));

}calculator(5,
    '+',
    10
    )
calculator(25.5,
    '-',
    3
    )   