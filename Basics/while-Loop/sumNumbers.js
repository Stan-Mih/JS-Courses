function sumNumbers(input) {
    let index = 0;
    let sumOfNumbers = Number(input[index]);
    index++;
    let result = 0;

    while(result < sumOfNumbers){
        let numb = Number(input[index]);
        result += numb;
        index++;
    }console.log(result);
}sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])

