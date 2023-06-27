function revealWords(inputWords,sentence) {

    // let arrWords = inputWords.split(', ');
    // let arrSentence = sentence.split(' ');

    // for(let u of arrWords){
    //     for(let i = 0; i < arrSentence.length; i++){
    //         if(arrSentence[i].length === u.length){
    //             arrSentence[i] = u;
    //             break;
    //         }
    //     }
    // };
    // console.log(arrSentence.join(' '));

    const arrWords = inputWords.split(', ');

    for(let i of arrWords){
    let stars = '*'.repeat(i.length);
    sentence = sentence.replace(stars, i);
    };
    console.log(sentence);

}revealWords('great',
'softuni is ***** place for learning new programming languages'
)
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages'
)