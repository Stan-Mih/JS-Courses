function triangleOfNumbers(num) {

    for(row = 1; row <= num; row++){
        let printLine = ""
        for(col = 1; col <= row; col++){
            printLine += `${row} `;
        }console.log(printLine);
    }
}triangleOfNumbers(10)