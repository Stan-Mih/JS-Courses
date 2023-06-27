function firstAndLastKNumbers(arr) {

    // let kNum = arr[0];
    // let kNumsStart = arr.slice(1, kNum + 1).join(" ")
    // let kNumEnd = arr.slice(arr.length - kNum , arr.length).join(" ")
    
    // console.log(kNumsStart);
    // console.log(kNumEnd);

    let k = arr.shift();
    let kFirst = arr.slice(-k).join(" ");
    let kLast = arr.slice(0, k).join(" ");

    console.log(kFirst);
    console.log(kLast);

    
}firstAndLastKNumbers([2, 
    7, 8, 9]
    );
firstAndLastKNumbers([3,
    6, 7, 8, 9]
   );