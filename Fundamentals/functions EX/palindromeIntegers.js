function palindromeIntegers(arr) {
    // for(i of arr){
    //     let isPalindrome = true;
    //     let toString = i.toString();
    //     let tempRIndex = toString.length
    //     for(u = 1; u <= (toString.length / 2); u++ , tempRIndex--){
    //         let tempL = toString[u - 1];
    //         let tempR = toString[tempRIndex - 1];
    //         if(tempL !== tempR){
    //             isPalindrome = false;
    //         }
    //     }if(isPalindrome){
    //         console.log(true);
    //     }else{
    //         console.log(false);
    //     }
    //  }
    for(let el of arr){
        let current = String(el);
        let reversed = String(el).split('').reverse().join('')
        if(current === reversed){
            console.log(true);
        }else{
            console.log(false);
        }
    }
     
}palindromeIntegers([23,323,421,121]);
console.log('----');
palindromeIntegers([32,2,232,1010]);