function passwordValidator(inputPass) {
    
    let isValid = true;

    length(inputPass);
    lettersAndDigits(inputPass);
    mustContain2Digits(inputPass);

    function mustContain2Digits(inputPass) {
        let count = 0;
        for(let char of inputPass) {
            if(char >= '0' && char <= 9){
                count++;
            }
        }
    
        if(count < 2){
            console.log('Password must have at least 2 digits');
            isValid = false;
        }
    }    

    function lettersAndDigits(inputPass){
        let nums = /^[A-Za-z0-9]*$/.test(inputPass)
        if(!nums){
            console.log("Password must consist only of letters and digits");
            isValid = false;
        }
    }
    function length(inputPass) {
        let passL = inputPass.length;
        if(passL < 6 || passL > 10){
            console.log("Password must be between 6 and 10 characters");
            isValid = false;
        }
    }
    if(isValid){
        console.log('Password is valid')
    }
}passwordValidator('logIn')
 passwordValidator('MyPass123')
 passwordValidator('Pa$s$s')