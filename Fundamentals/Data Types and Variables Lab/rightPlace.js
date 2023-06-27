function rightPlace(word, char, symbol) {
    let rep = word.replace("_", char);
    if (rep === symbol){
        console.log("Matched");
    }else{console.log("Not Matched")}

}rightPlace('Str_ng', 'i', 'String')