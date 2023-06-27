function sumOfTwoNums(input){

    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNum = Number(input[2]);
    let combinationCounter = 0;
    let flag = true;

    for(a = start; a <= end; a++){
        for(b = start; b <= end; b++){
            combinationCounter++;
            if(a + b === magicNum){

                console.log(`Combination N:${combinationCounter} (${a} + ${b} = ${magicNum})`); 
                flag  = false;
                break;
            }
        }   
    }if(flag){
        console.log(`${combinationCounter} combinations - neither equals ${magicNum}`)
    }


}sumOfTwoNums(["88", 
"888", 
"2000"])
















