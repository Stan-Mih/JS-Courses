function processOddPositions(arr) {
    const odd = [];

    arr.forEach((el, i) => {
        i % 2 !== 0 ? odd.push(el * 2) : null 
    });
    console.log(odd.reverse().join(" "));
    
}processOddPositions([10, 15, 20, 25])
processOddPositions([3, 0, 10, 4, 7, 3])
