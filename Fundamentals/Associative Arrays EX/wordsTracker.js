function wordsTracker(words) {

    let searchWords = words.shift().split(" ");
    
    let wordsCounter = {};

    for(let word of searchWords){
        wordsCounter[word] = 0;
    }
    for(let word of words){  
        if(wordsCounter.hasOwnProperty(word)){
            wordsCounter[word]++;
        }
    }
    let toEntries = Object.entries(wordsCounter);
    toEntries.sort((a,b) => b[1]- a[1]);
    
    for(let i of toEntries){
        console.log(`${i[0]} - ${i[1]}`);
    }

}wordsTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    )
    console.log("++++++++++++++++++++++++++");
wordsTracker([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    )