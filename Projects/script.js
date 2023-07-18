function randomSentecesGenerator(){

const readline = require("readline").createInterface({
    input: precess.stdin,
    output: process.stdout
});

let names = ["Gosho","George","Pesho","Peter","Steve","Jane"];
let places = ["Sofia", "Plovdiv", "Varna", "Burgas"];
let verbs = ["eats", "holds", "sees", "plays with", "brings"];
let nouns = ["stones", "cake", "apple", "laptop", "bikes"];
let adverbs = ["slowly", "diligently", "warmly", "sadly", "rapidly"];
let detailes = ["near the river", "at home", "in the park"];

function getRandomWord(array) {
    let word = array[Math.floor(Math.random() * array.length)];
    return word;
}

let randomName = getRandomWord(names);
let randomPlace = getRandomWord(places);
let randomVerb = getRandomWord(verbs);
let randomNoun = getRandomWord(nouns);
let randomAdverb = getRandomWord(adverbs);
let randomDetailes = getRandomWord(detailes);

let who = `${randomName} from ${randomPlace}`;
let action = `${randomAdverb} ${randomVerb} ${randomNoun}`;
let sentence = `${who} ${action} ${randomDetailes}`;

console.log("Hello this is your first randomly generated sentence");
console.log(sentence);

let recursiveAsyncReadline = function() {
    readline.question("Click [Enter] to generate new one.", string => )
}
}