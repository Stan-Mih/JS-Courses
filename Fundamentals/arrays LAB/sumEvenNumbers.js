function sumEvenNumbers(input) {

    let sum = 0;
    for( i  of input){
        let locl = +(input[i]);
        if(locl % 2 === 0){
            sum += locl;
        }
    }
    console.log(sum);
}sumEvenNumbers(['1','2','3','4','5','6']) 