function biggestElement(arr) {

    const nums = [];

    arr.forEach(el => {
      nums.push(...el)  
    });
    console.log(nums.sort((a,b)=>b-a)[0]);

    
}
biggestElement([[20, 50, 10],
    [8, 33, 145]]
   )
biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   )