function evenPositionElement(arr) {

    let newArr = [];
    const arrL = arr.length

    for(let i = 0; i < arrL; i++){      
        i % 2 ===0 ? newArr.push(arr[i]):null;
    }
    console.log(newArr.join(" "));

}evenPositionElement(['20', '30', '40', '50', '60'])
evenPositionElement(['5', '10'])
