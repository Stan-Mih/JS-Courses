function simpleCalculator(x, y, operator) {
    let res;
    switch (operator) {
        case "subtract":
            subtract(x, y)
            break;
        case "divide":
            divide(x, y)
            break;
        case "multiply":
            multiply(x, y)
            break;   
        case "add":
            add(x, y)
            break;         
        default:
            break;
    }

    function subtract(a, b) {
        res = a - b;
    }
    function divide(a, b) {
        res = a / b;
    }
    function multiply(a, b) {
        res = a * b;
    }
    function add(a, b){
        res = a + b;
    }
    console.log(res);
}simpleCalculator(5,5,'multiply')
simpleCalculator(40,8,'divide')
simpleCalculator(12,19,'add')
simpleCalculator(50,13,'subtract')