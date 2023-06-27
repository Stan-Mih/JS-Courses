function vacation(input) {
    index = 0;
    let vacationCost = Number(input[index]);
    index++;
    let savedMoney = Number(input[index]);
    index++;
    
    let goingToVacation = false;
    let dayCounter = 0;
    let spendCount = 0;
    
    while(savedMoney < vacationCost){
        dayCounter++;
        let movement = input[index];
        index++;
        let currMoney = Number(input[index]);
        index++;
        if(movement === "spend"){
            savedMoney -= currMoney
            spendCount++;
            if(savedMoney < 0){
                savedMoney = 0;
            }
        }else if(movement === "save"){
            savedMoney += currMoney
            spendCount = 0;
        }
        if(spendCount === 5){
            console.log("You can't save the money."); 
            console.log(dayCounter); break;
        }
        if(savedMoney >= vacationCost){
            goingToVacation = true;
        }
        
    }if(goingToVacation === true){
        console.log(`You saved the money for ${dayCounter} days.`);
    }


}vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])





