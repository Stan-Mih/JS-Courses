function sumOfPrimeNonPrime(input) {
let index = 0;
let inputData = input[index];
index++;
let isNegative = false;
let primeSum = 0;
let nonPrimeSum = 0;

    while(inputData !== "stop"){
        let num = +(inputData);
        let primeDetector = 0;
        if(num < 0){
            isNegative = true;
            inputData = input[index];
            index++;
            continue;
        }
        if (num === 1){
            primeSum += 1;
            inputData = input[index];
            continue;
        }
        for(i = 1; i <= num; i++){
            if(num % i === 0){
                primeDetector++;
            }
        }
        if(primeDetector === 2){
            primeSum += num;
        }else{
            nonPrimeSum +=num;
        }
        inputData = input[index];
        index++;
    }
    if(isNegative){
        console.log("Number is negative.");
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`)

}sumOfPrimeNonPrime(["30",
"83",
"33",
"-1",
"20",
"stop"])









