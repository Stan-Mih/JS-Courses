function smallestTwoNumbers(arr) {

    let arrSorted = arr.sort((a, b) => a - b);
    let smallestNums = arrSorted.slice(0, 2)

    console.log(smallestNums.join(" "));
 }smallestTwoNumbers([30, 15, 50, 5])
smallestTwoNumbers([3, 0, 10, 4, 7, 3])