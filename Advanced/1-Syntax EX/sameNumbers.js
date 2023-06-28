function sameNumbers(param) {

    let toString = param.toString();
    let sum = 0;
    let print = true;
    let firstNum = toString[0];

    for(let i = 0; i <toString.length; i++){

        sum += Number(toString[i]);
        if(firstNum  !== toString[i]){
            print = false;
        }
        
    }
    if(print){
        console.log("true");
        console.log(sum);
    }else{
        console.log("false");
        console.log(sum);
    }
    

}sameNumbers(2222222)
sameNumbers(1234)