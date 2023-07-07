function sumFirstAndLast(arr) {
    
    let arrStart = arr.shift();
    let arrEnd = arr.pop();

    console.log(+(arrStart) + +(arrEnd));

}sumFirstAndLast(['20', '30', '40'])
sumFirstAndLast(['5', '10'])