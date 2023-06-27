function walking(input) {
    let index = 0;
    let goal = 10000;
    let stepsTotal = 0;
    let inputData = input[index]
    


    while(inputData !== "Going home"){
        let currStepps = Number(input[index]);
        index++;
        inputData = input[index];
            
        stepsTotal += currStepps;
        let diff = Math.abs(stepsTotal - goal)
        if(stepsTotal > goal){
            console.log('Goal reached! Good job!');
            console.log(`${diff} steps over the goal!`); break;
        }
    }
    if (inputData === "Going home"){
        index++;
        let lastStepps = Number(input[index]);
        stepsTotal += lastStepps;
        let diff2 = Math.abs(stepsTotal - goal)
        if(stepsTotal > goal){
            console.log('Goal reached! Good job!');
            console.log(`${diff2} steps over the goal!`);
        }else if(stepsTotal < goal){
            console.log(`${diff2} more steps to reach goal.`);
        }
    }
}walking(["125",
"250",
"4000",
"30",
"2678",
"4682"])












