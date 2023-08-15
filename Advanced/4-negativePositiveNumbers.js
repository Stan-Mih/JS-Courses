function negativePositiveNumbers(arr) {
    const newArr = [];
    arr.forEach(el => {
        el > 0 ? newArr.push(el) : newArr.unshift(el)
    });
    console.log(newArr.join("\n"));
    
}negativePositiveNumbers([7, -2, 8, 9])
negativePositiveNumbers([3, -2, 0, -1])