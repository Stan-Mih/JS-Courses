function integerAndFloat(a,b,c) {
    let sum = a + b + c;

    
    // if(sum % 1 === 0){
    //     detector = "Integer"
    // }else{
    //     detector = "Float"
    // }
   
    let detector = ""
    sum % 1 === 0 ? detector = "Integer" : detector = "Float";
 
    console.log(`${sum} - ${detector}`);
}integerAndFloat(100, 200, 303)