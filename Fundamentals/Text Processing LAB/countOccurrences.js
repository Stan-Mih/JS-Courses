function countOccurrences(sentence, searhWord) {

    let counter = 0;
    let arrOfWords = sentence.split(' ');

    for(let i of arrOfWords){
        if(i === searhWord){
            counter ++;
        }
    }
    console.log(counter);
}countOccurrences('This is a word and it also is a sentence',
'is'
)
countOccurrences('softuni is great place for learning new programming languages',
'softuni'
)