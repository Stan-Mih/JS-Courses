function ExtractIncreasingSubsetFromArray(array) {

    const newArr = [];
    let currEl = 0;

    array.forEach(el => {
        if(el >= currEl){
            currEl = el;
            newArr.push(el);
        }
    }); 
    return newArr;
    
   

   
}
ExtractIncreasingSubsetFromArray([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    )
ExtractIncreasingSubsetFromArray([1, 
    2, 
    3,
    4]
    )
ExtractIncreasingSubsetFromArray([20, 
    3, 
    2, 
    15,
    6, 
    1]
    )