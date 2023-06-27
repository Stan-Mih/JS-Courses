function accountBallance(input) {
    let index = 0;
    let currentInput = input[index];
    let total = 0;

    while(currentInput !== "NoMoreMoney"){
        let num = Number(currentInput);
        if(num < 0){
            console.log("Invalid operation!"); break;
        }
        total += num
        console.log(`Increase: ${num.toFixed(2)}`);
        index++;
        currentInput = input[index];    

    }
    console.log(`Total: ${total}`);

}accountBallance(["120",
"45.55",
"-150"])

