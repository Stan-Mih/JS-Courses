function charactersInRange(firstChar, secondChar) {
    
    let startChar = Math.min(firstChar.charCodeAt(0), secondChar.charCodeAt(0));
    let endChar = Math.max(firstChar.charCodeAt(0), secondChar.charCodeAt(0));

    let string = " "
    
    for(i = startChar + 1; i < endChar; i++){
       let toString = String.fromCharCode(i);
       string += toString
    }
    let toPrint = string.split('').join(' ');
    console.log(toPrint);

}charactersInRange('a','d')
charactersInRange('#',':')
charactersInRange('C','#')