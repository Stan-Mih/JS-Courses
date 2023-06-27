function sumOfOddNumbers(n) {
    let sumOfNums = 0;
    let counter = 0;
    for(i = 1; n > counter; i++){
        if(i % 2 !== 0){
            console.log(i);
            sumOfNums +=i;
            counter ++;
        }
    }console.log(`Sum: ${sumOfNums}`);
}sumOfOddNumbers(5)