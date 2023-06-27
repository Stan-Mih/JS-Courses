function pasword(arr) {

    let numOfInputs = Number(arr.shift());
    
    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
    }

    for( let i = 0; i < numOfInputs; i++){
        let password = arr[i];
        let firstHalf = password.split(">");
        let firstSymbols = firstHalf[0];
        let secondHalf = password.split("<");
        let secondSymbols = secondHalf[1];
        if(firstHalf.length!=2 || secondHalf.length!=2
            || firstHalf[1].indexOf("|") < 0) {
            console.log("Try another password!");
        } 
        else if(firstSymbols !== secondSymbols){
            console.log("Try another password!");
        }
        else {
            let middlePortion = firstHalf[1].split("<")[0];
            let middlePortionArray = middlePortion.split("|");

            let numbers = Number(middlePortionArray[0]);  //only numbers
            if(!numbers){
                console.log("Try another password!")
            }
            else
            {
                let lowChars = middlePortionArray[1];            //lower case
                let toLowerCase = lowChars.toLowerCase();
                if(lowChars !== toLowerCase){
                    console.log("Try another password!")
                }else {
                    let upperChars = middlePortionArray[2];         // upper case
                    let toUpperCase = upperChars.toUpperCase();
                    if(upperChars !== toUpperCase){
                        console.log("Try another password!")
                    }else {
                        let allSymbols = middlePortionArray[3];        // sybols without < >
                        let firstSymbol = !allSymbols.includes("<");
                        let seccondSymbol = !allSymbols.includes(">");
                        if((!firstSymbol && !seccondSymbol) || allSymbols.length == 0){
                            console.log("Try another password!")
                        }else{
                            let encryptedPassword = middlePortion.replace(new RegExp(escapeRegExp('|'), 'g'), '');
                            console.log(`Password: ${encryptedPassword}`);
                        }
                    }
                }
            }
        }
    }
}
pasword(["3",
"##>00|no|NO|!!!?<###",
"##>123|yes|YES|!!!<##",
"$$<111|noo|NOPE|<<>$$"])
console.log("============");

pasword(["5",
"aa>111|mqu|BAU|mqu<aa",
"()>111!aaa!AAA!^&*<()",
"o>088|abc|AAA|***<o",
"asd>asd|asd|ASD|asd<asd",
"*>088|zzzz|ZzZ|123<*"])

