function movingTarget(input) {

let targets = input.shift().split(' ');
let commandsAndTargets = input.slice();
let commandAndTarget = commandsAndTargets.shift();


while(commandAndTarget !== "End"){

    let command = commandAndTarget.split(" ");
    // let action = command [0];
    // let indexOfTarget = command [1];
    // let value = command [2];

    let [action, indexOfTarget, value]= command; // array destructuring

    let numberOfTargetIndices = targets.length - 1;

    switch (action) {
        case "Shoot":
            if(indexOfTarget >= 0 && indexOfTarget <= numberOfTargetIndices){
                let health = targets[indexOfTarget] - value;
                if(health <= 0){
                 targets.splice(indexOfTarget, 1);
                }else(targets[indexOfTarget] = health);
            }
            break;

        case "Add":
            if(indexOfTarget >= 0 && indexOfTarget <= numberOfTargetIndices){
                targets.splice(indexOfTarget,0,value)

            }else(console.log("Invalid placement!"));

            break;

        case "Strike":
            if(indexOfTarget >= 0 && indexOfTarget <= numberOfTargetIndices){

                let lowerRange = Number(indexOfTarget) - Number(value);
                let upperRange = Number(indexOfTarget) + Number(value);
                let numOfTargetsToBeRem = value * 2 + 1;
        
                if(upperRange <= numberOfTargetIndices && lowerRange >= 0){
                    targets.splice(lowerRange, numOfTargetsToBeRem)
                }else(console.log("Strike missed!" ));
            }
            break;    
    }
    
commandAndTarget = commandsAndTargets.shift();

}

console.log(targets.join('|'));

}movingTarget(["1 2 3 4 5",
"Strike 0 1",
"End"])
