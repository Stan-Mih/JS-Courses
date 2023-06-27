function minNumber(input) {
    let index = 0;
    let inputData = input[index];

    let minNumber = Number(inputData);

    while(inputData !== "Stop"){
        let num = Number(inputData);
        if(num < minNumber){
            minNumber = num;
        }
        index++;
        inputData = input[index];
    }
    console.log(minNumber);
}minNumber(["-1",
"-2",
"Stop"])




