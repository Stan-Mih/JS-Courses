function sumAndProduct (input){
    let n = input[0];

    let lastDigit = n.charAt(n.length - 1);

    let outputNumber = 'Nothing found';
    aLoop:
    for(let a = 1; a <= 9; a++){
       
        for(let b = 9; b>= a; b--){

            for(let c = 0; c <= 9; c++){
                for(let d = 9; d >=c ; d--){


                    let sum = a + b + c + d;
                    let pow = a * b * c * d;

                    if((sum == pow) && (lastDigit == 5)){
                        outputNumber = `${a}${b}${c}${d}`
                        break aLoop;
                    }

                    if(Math.floor(pow/sum) == 3 && n%3 == 0) {
                        outputNumber = `${d}${c}${b}${a}`
                        break aLoop;
                    }
                }
            }
        }
    }

    console.log(outputNumber)
    
}sumAndProduct(["123"])
