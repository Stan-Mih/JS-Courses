function passwordValidator(inputPass) {

    let passIsValid = true;

    length(inputPass);
    lettersAndDigits(inputPass);
    enoughDigits(inputPass);

    function length(input) {
         let passL = input.length;
         if(passL < 6 || passL > 10){
            passIsValid = false;
            console.log("Password must be between 6 and 10 characters");
         }
    }
    function lettersAndDigits(input) {
        let test = /^[A-Za-z0-9]*$/.test(input);
        if(!test){
            passIsValid = false;
            console.log("Password must consist only of letters and digits");
        }
    }
    function enoughDigits(input) {
        let counter = 0;
        for(let char of input){
            let charToNum = +char;
            if(Number.isInteger(charToNum)){
                counter++;
            }
        }if(counter<2){
            passIsValid = false;
            console.log("Password must have at least 2 digits"); 
        }
    }
    if(passIsValid){
        console.log("Password is valid");
    }

}passwordValidator('logIn')
passwordValidator('MyPass123')
passwordValidator('Pa$s$s')