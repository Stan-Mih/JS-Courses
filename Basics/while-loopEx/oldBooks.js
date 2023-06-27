function oldBooks(input){
    let index = 0;
    let bookWanted = input[index];
    index++;
    let bookInput = input[index];
    index++;
    let bookCounter = 0;
    let bookFound = false;

    while(bookInput !== "No More Books"){
        if(bookWanted === bookInput){
            bookFound = true; break;
        }
    bookCounter++;
    bookInput = input[index];
    index++;        
    }
    if(bookFound === true){
        console.log(`You checked ${bookCounter} books and found it.`)
    }else if(bookFound === false){
        console.log('The book you search is not here!');
        console.log(`You checked ${bookCounter} books.`);
    }

}oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])


