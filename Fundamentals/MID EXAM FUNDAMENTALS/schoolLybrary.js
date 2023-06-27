function schoolLybrary(input) {

    let shelf = input.shift().split("&");
    let commandAndBookStr = input.shift();
    
    while(commandAndBookStr !== "Done"){
        let commandAndBook = commandAndBookStr.split('|');
        let command = commandAndBook[0].trim();
        let book = commandAndBook[1].trim();
        let book2 = commandAndBook[2];

        switch (command){

            case "Add Book" :

                if(shelf.includes(book)){
                }else(shelf.unshift(book));

                break;

            case "Take Book" :
                if(shelf.includes(book)){
                    let index = shelf.indexOf(book);
                    shelf.splice(index,1);
                }
                break;

            case "Swap Books" :
                if(shelf.includes(book.trim()) && shelf.includes(book2.trim())){
                    book2 = book2.trim()
                    let index1 = shelf.indexOf(book);
                    let index2 = shelf.indexOf(book2);
                    let takenBook = shelf[index1];
                    shelf[index1] = shelf[index2];
                    shelf[index2] = takenBook;
                }
                break;
                
            case "Insert Book" :
                if(shelf.includes(book)){

                }else(shelf.push(book));

                break;

            case "Check Book" :
                book = +book;
                if(book < shelf.length){
                    console.log(shelf[book]);
                }
                break;
        }


        commandAndBookStr = input.shift();
    }
    console.log(shelf.join(", "));

}



schoolLybrary(["War and Peace&Hamlet&Ulysses&Madame Bovary",
"Check Book | 2",
"Swap Books | Don Quixote | Ulysses",
"Done"])
