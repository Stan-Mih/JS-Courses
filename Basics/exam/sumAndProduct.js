function sum(input) {
    let n = input[0];
    let a = Math.floor(Math.random() * 9) + 1;
    let b = Math.floor(Math.random() * (9 - a + 1)) + a;
    let c = Math.floor(Math.random() * 9);
    let d = Math.floor(Math.random() * (9 - c + 1)) + c;

    let sum = a + b + c + d;
    let pow = a * b * c * d;
    

    if (sum == pow) {}


console.log();
}sum(["125"])
