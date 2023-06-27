function maxNumber(arr) {

    let arrL = arr.length
    let newArr = [];
    
    for(i = 0; i < arrL; i++){

        let num1 = arr[i];
        let isBigger = true;

        for(u = i + 1; u < arrL; u++){

            let num2 = arr[u];
            if (num1 <= num2){
                isBigger = false;
            }
        }
        if(isBigger){
            newArr.push(num1);
        }
    }console.log(newArr.join(' '));
}maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);