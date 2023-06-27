function sorting(arr) {
   
    let arrCopy = arr.splice(0);
    let arrL = arrCopy.length;
    let result = [];
    
    let arrSorted = arrCopy.sort((a, b) => b - a);

    for(let i = 1; i <= (arrL / 2)  ; i++){
        
        result.push(arrSorted.shift());
        result.push(arrSorted.pop());
    }
    

    console.log(result.join(" "));
}sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])