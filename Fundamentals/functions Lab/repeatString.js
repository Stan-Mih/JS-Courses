function repeatString(string, n) {
    
    let buff = "";
    for(i = 0; i < n; i++){
        buff += string;
    }
    return buff;
    
    
}
console.log(repeatString("String", 2)); 