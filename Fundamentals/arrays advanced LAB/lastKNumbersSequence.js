function lastKNumbersSequence(len, el) {
    
    let arr = [1];

    for(let i = 0; i < len - 1; i++){
        
        arr.push(arr[i] + arr[i + 1]) 
    }
    console.log(arr);
}lastKNumbersSequence(6, 3)
lastKNumbersSequence(8, 2)