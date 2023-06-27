function schoolGrades(arr) {

    let grades = {}

    for(let i of arr){
        let curentInput = i.split(" ");
        let name = curentInput.shift();
        
        for(let u of curentInput){
            if(grades[name]){
                grades[name] += ` ${u}`;
            }else{
                grades[name] = u;
            }
        }
    }
    let toEntries = Object.entries(grades);
    let soreted = toEntries.sort((a,b) => a[0].localeCompare(b[0]));

    for(let i of soreted){
        let name = i.shift();
        let grades = i[0].split(" ");
        
        let gradesSum = 0;
        let counter = 0;

        for(let i of grades){
        gradesSum += Number(i);   
        counter ++;
        }
        let avrgGrade = gradesSum / counter;
        


        console.log(`${name}: ${avrgGrade.toFixed(2)}`);
    }



}schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
)
console.log("====================");
schoolGrades(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3']
)