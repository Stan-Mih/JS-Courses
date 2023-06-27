function maxNumber(input) {
    let index = 0;
    let inputData = input[index];
    
    let higestNum = Number(inputData);

    while(inputData !== "Stop"){
        let num = Number(inputData);
        if(num > higestNum){
            higestNum = num
        }
        index++;
        inputData = input[index];

    }
    console.log(higestNum);
}maxNumber(["-1",
"-2",
"Stop"])






