function sumFirstLast(arr) {

    const a = +arr.pop();
    const b = +arr.shift(); 
    return a + b;

}
sumFirstLast(['20', '30', '40'])
sumFirstLast(['5', '10'])