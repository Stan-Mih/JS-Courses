function printEveryNThElemenFromAnArray(arr, step) {

    // const array = [];
    // const arrL = arr.length;

    // for(let i = 0; i < arrL; i+=step){
    //     array.push(arr[i])
    // }  
    // return array; 

  
    return arr.filter((_, index) => index % step === 0); // In this case we use only index and not the element. We put : "_" in this case so the other colegues know it's not used   
    
}
printEveryNThElemenFromAnArray(['5', 
'20', 
'31', 
'4', 
'20'], 
2
)
printEveryNThElemenFromAnArray(['dsa',
'asd', 
'test', 
'tset'], 
2
)
printEveryNThElemenFromAnArray(['1', 
'2',
'3', 
'4', 
'5'], 
6
)