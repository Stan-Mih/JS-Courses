function printAndSum(firstNum, secondNum) {

    let printLine = ""
    let sum = 0;
    
    for(i = firstNum; i <= secondNum; i++){
        sum += i;
        if(i === secondNum){
            printLine += `${i}`;
        }else{
            printLine += `${i} `;
        }
    }
   
    console.log(printLine);
    console.log(`Sum: ${sum}`);
    

}printAndSum(5, 10)