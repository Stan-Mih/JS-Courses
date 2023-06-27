function graduation(input) {
    let index = 0;
    let name = input[0];
    index++;
    let grades = 1;
    let marksSum = 0;
    let failCount = 0;

    while(grades <= 12){
        let mark = Number(input[index]);
        index++;

        if(mark >= 4 ){
        marksSum += mark;
        grades++;
        }else{
            failCount++;
        
        }
        if(failCount === 2){
            console.log(`${name} has been excluded at ${grades} grade`); break;
        }else if(grades === 13){
            let avaregeGrade = marksSum / 12
    console.log(`${name} graduated. Average grade: ${avaregeGrade.toFixed(2)}`);
        }
    
    
    
    
}
}graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])


