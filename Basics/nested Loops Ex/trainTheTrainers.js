function train(input) {
    let index = 0;
    let joury = +(input[index]);
    index++;
    let inputData = input[index];
    index++;
    let finalGrade =  0;
    let gradeCounter = 0;

    while(inputData !== "Finish"){
        let gradeSum = 0;
        for(i = 0; i < joury ; i++){
            let grade = +(input[index]);
            index++;
            gradeSum += grade;
        }
        let avrgGrade = gradeSum / joury;

        console.log(`${inputData} - ${avrgGrade.toFixed(2)}.`);  
        inputData = input[index];
        index++;
        finalGrade += avrgGrade;
        gradeCounter += 1;
    }
    let printGrade = finalGrade / gradeCounter;

    console.log(`Student's final assessment is ${printGrade.toFixed(2)}.`);
    

}train(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])


