function rounding(num, decimels) {
    
    if(decimels >= 15){
        decimels = 15;
    }
    let roundedNumber = num.toFixed(rounding);
    
    console.log(parseFloat(roundedNumber));
}rounding(3.141592600000000000000000000000000,18)