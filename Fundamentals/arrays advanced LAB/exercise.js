function firstAndLastkNums(arr) {
    
    let kNum = arr.shift();
    let firstKNums = arr.slice(0,kNum)

    let stopRrange = arr.length;
    let startRange = arr.length-kNum;
    let lastKNums = arr.slice(startRange, stopRrange)
    console.log(firstKNums);
    console.log(lastKNums);
}

firstAndLastkNums([2, 
    7, 8, 9]
    )
    firstAndLastkNums([3,
    6, 7, 8, 9]
   )

