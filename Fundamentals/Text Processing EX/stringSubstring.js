function stringSubstring(inputWord, inputSentece) {

    const setnece = inputSentece
        .toLowerCase()
        .split(' ');
    const word = inputWord.toLowerCase();   
    let noMatch = true;

    for(const element of setnece) {
        if(word === element){
            console.log(word);
            break;
        }
        else{
            noMatch = false; 
        }
    };
    if(!noMatch){
        console.log(`${word} not found!`);
    }

}stringSubstring('javascript',
'JavaScript is the best programming language'
)
stringSubstring('python',
'JavaScript is the best programming language'
)