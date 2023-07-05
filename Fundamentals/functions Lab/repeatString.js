function repeatString(string, n) {
    
    let buff = "";
    for(i = 0; i < n; i++){
        buff += string;
    }
    return buff;
}

console.log(repeatString("String", 2)); 




// arrow function 

let repeat = (str,num) => {
    return str.repeat(num);
}

let print = repeat("abc", 3)

console.log(print);