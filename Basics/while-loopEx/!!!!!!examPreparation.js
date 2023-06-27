function examPreparation(input){
    let index = 0;
    let allowedLowGrades = Number(input[index]);
    index++;
    index;

    let lowGradeCount = 0;
    let highGradeCount = 0;
    let sumOfGrades = 0;
    let lastTask = " "

    while(lowGradeCount < allowedLowGrades){
        let nameOfTask = input[index];
        index++;
        let grade = Number(input[index]);
        index++;
        
        if(nameOfTask === "Enough"){
            let avrg = sumOfGrades / (lowGradeCount + highGradeCount);
            console.log(`Average score: ${avrg}`);
            console.log(`Number of problems: ${lowGradeCount + highGradeCount}`);
            console.log(`Last problem: ${lastTask}`);
        }
        lastTask = nameOfTask
        if(grade <= 4){
            lowGradeCount++;
            sumOfGrades += grade;
        }else if(grade > 4){
            highGradeCount++;
            sumOfGrades += grade;
        }
        if (lowGradeCount === allowedLowGrades){
            console.log(`You need a break, ${lowGradeCount} poor grades.`);
        }
    }   
}examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])





