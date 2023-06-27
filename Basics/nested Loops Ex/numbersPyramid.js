function numPyramid(input) {

    let num = +(input[0]);
    let printLine = ""
    let currentNum = 1
    let isBigger = false;

    for(row = 1; row <= num; row++){
        for(col = 1; col <= row; col++){
            if(currentNum > num){
                isBigger = true;
                break;
            }
            printLine += currentNum + " "
            currentNum++;
        }
        console.log(printLine);
        printLine = "";
        if(isBigger){
            break;
        }
    }

        
}numPyramid(["7"])