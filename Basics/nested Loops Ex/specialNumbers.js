function specialNumbers(input) {
    let n = +(input[0]);
    let currentNum = 1111;
    let printAll = ''
    for(i = 1111; i <= 9999; i++){
        let counter = 0;
        for(u = 0; u < 4; u++){
            let currentDigit = currentNum+''
            let localNum = currentDigit.charAt(u);
            let localDigit = +(localNum)
            if(n % localDigit === 0){
                counter++;
            }
        }
    if(counter === 4){
        printAll += `${currentNum} `
    }    
    
    currentNum++;
    }
    console.log(printAll);
}specialNumbers(["16"])