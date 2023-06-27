function negativeOrPositiveNumbers(arr) {

    let newArr = [];

    for(let temp of arr){
        if(+(temp) >= 0){
            newArr.push(temp);
        }else{
            newArr.unshift(temp);
        }
    }
    console.log(newArr.join("\n"));
}negativeOrPositiveNumbers(['7', '-2', '8', '9'])
console.log('-----');
negativeOrPositiveNumbers(['3', '-2', '0', '-1'])