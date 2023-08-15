function  biggerHalf(arr) {

    const startIndex = Math.floor(arr.length / 2);
    const indexToCut = Math.ceil(arr.length / 2);   
    const sorted = arr
    .sort((a,b) => a-b)
    .splice(startIndex, indexToCut) 
    ;  
    console.log(sorted);
    
} 
biggerHalf([4, 7, 2, 5])
biggerHalf([3, 19, 14, 7, 2, 19, 6])
