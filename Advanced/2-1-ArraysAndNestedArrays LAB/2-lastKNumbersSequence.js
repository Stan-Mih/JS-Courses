function lastKNumbersSequence(n, k) {

    let arr = [1];

   for(let i = 1; i < n; i++){
        const lastElements = arr.slice(-k);
        let sum = 0;
        lastElements.forEach(el => {
            sum+=el;
        });
        arr.push(sum)     
   }
   console.log(arr);
    
    
}
lastKNumbersSequence(6, 3)
lastKNumbersSequence(8, 2)
