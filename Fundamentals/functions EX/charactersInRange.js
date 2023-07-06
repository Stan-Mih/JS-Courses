function charactersInRange(firstChar, secondChar) {
    
    let startChar = Math.min(firstChar.charCodeAt(0), secondChar.charCodeAt(0));
    let endChar = Math.max(firstChar.charCodeAt(0), secondChar.charCodeAt(0));

    let arr = [];
    
    for(i = startChar + 1; i < endChar; i++){
       let toString = String.fromCharCode(i);
       arr.push(toString)
    }
    let toPrint = arr.join(" ")
    console.log(toPrint);

}charactersInRange('a','d')
charactersInRange('#',':')
charactersInRange('C','#')