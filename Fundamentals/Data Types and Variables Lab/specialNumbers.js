function specialNumbers(num){
    
    for(u = 1; u <= num; u++){
        let sum = 0;
        let toString = u.toString();
        let length = toString.length;

        for(i = 1; i <= length; i++){
        let lastNum = u % 10;
        sum += lastNum;
        let remLastNum = parseInt(u / 10);
        }
        if(sum === 5 || sum === 7 || sum ===11){
            console.log(`${u} -> True`);
        }else{console.log(`${u} -> False`);}

    }
        
}specialNumbers(155)