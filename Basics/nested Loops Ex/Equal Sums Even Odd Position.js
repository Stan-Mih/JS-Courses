function equal(input) {
    let num1 = +(input[0]);
    let num2 = +(input[1]);

    let printLine = ""

    for(i = num1; i <= num2; i++){
        let currentNum = ""+i;
        let oddNum = 0;
        let evenNum = 0;
            for(let u = 0; u < currentNum.length; u++){
                let currentDigit = Number(currentNum.charAt(u));
                if(u % 2 !== 0){
                    oddNum += currentDigit;
                }else{
                    evenNum += currentDigit;
                }
        }
        if(oddNum === evenNum){
            printLine += `${currentNum} `;
        }
    
    }
    console.log(printLine)

}equal(["1000",
"1050"])

