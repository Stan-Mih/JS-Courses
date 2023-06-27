function exam(input){
    let studentsCount = Number(input[0]);
    let studentMarks = [];
    let totalMarks = 0;
 
    for (let i=1; i <= studentsCount; i++) {
        studentMarks.push(Number(input[i]))
        totalMarks += Number(input[i]);
    }
 
    let topStudents = 0;
    let students45 = 0;
    let students34 = 0;
    let students23 = 0;
 
    for (const element of studentMarks)
    {
        let mark = element;
 
        if(mark >= 5) {
            topStudents++;
        } else if(mark >= 4 && mark < 5) {
            students45++;
        } else if(mark >= 3 && mark < 4) {
            students34++;
        } else {
            students23++;
        }
    }
 
    console.log(`Top students: ${((topStudents / studentsCount) * 100).toFixed(2)}%`)
    console.log(`Between 4.00 and 4.99: ${((students45 / studentsCount) * 100).toFixed(2)}%`)
    console.log(`Between 3.00 and 3.99: ${((students34 / studentsCount) * 100).toFixed(2)}%`)
    console.log(`Fail: ${((students23 / studentsCount) * 100).toFixed(2)}%`)
    console.log(`Average: ${(totalMarks / studentsCount).toFixed(2)}`)
 
    
}