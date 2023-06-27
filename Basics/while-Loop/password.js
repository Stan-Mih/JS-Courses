function password(input) {
    let index = 0;
    let userName = input[index];
    index++;
    let pass = input[index];
    index++;
    let enteredPass = input[index];

    while(pass !== enteredPass){
        enteredPass = input[index];
        index++;    
    } console.log(`Welkome ${userName}!`);

}password(["Nakov",
"1234",
"Pass",
"1324",
"1234"])
