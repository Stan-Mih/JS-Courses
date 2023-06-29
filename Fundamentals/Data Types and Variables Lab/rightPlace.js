function rightPlace(word, char, symbol) {

    let rep = word.replace("_", char);

    // if (rep === symbol){
    //     console.log("Matched");
    // }else{console.log("Not Matched")}

    console.log(rep === symbol ? "Matched" : "Not Matched");

}rightPlace('Str_ng', 'i', 'String')

rightPlace('Str_ng', 'I', 'Strong')