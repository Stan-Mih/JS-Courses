function lastKNumbersSequence(len, el) {
    
    let arr = [1];

    for(let i = 1; i <=len; i++){
        let lastElements = arr.slice(len- el);
        console.log(lastElements);
    }
        
    

    

}lastKNumbersSequence(6, 3)
lastKNumbersSequence(8, 2) 