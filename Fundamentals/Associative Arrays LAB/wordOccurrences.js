function wordOccurrences(arr) {
    let wordsCounter = {};

    for(let element of arr){
        if(wordsCounter[element]){
           wordsCounter[element] += 1;
        }else{
            wordsCounter[element] = 1; 
        }
    }   
    let toEntry = Object.entries(wordsCounter);
    toEntry.sort((a,b) => b[1]- a[1]);

    toEntry.forEach(element => {
        console.log(`${element[0]} -> ${element[1]} times`);
    });


}wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])
console.log("===================");
wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"])