function censoredWords(sentence, word) {
    let censore = '*'.repeat(word.length);
    
    let censored = sentence.replace(word,censore)
    console.log(censored);
    
}censoredWords('A small sentence with some words', 'small')
censoredWords('Find the hidden word', 'hidden')