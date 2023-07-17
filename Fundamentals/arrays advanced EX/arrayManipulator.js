function arrayManipulator(nums, commands) {
    
    for(i = 0;i < commands.length; i++){
        let currentValue = commands[i].split(" ")
        let currentCommand = currentValue.shift();
        
        currentValue = currentValue.map(Number);
        
        let sumPairs = 0;
        let pairsOfSumNums = [];
        
        switch (currentCommand) {
            case "add": 
                nums.splice(currentValue[0],0,currentValue[1]);
                break;
            case "addMany":
                let indexToAddMany = currentValue.shift();
                nums.splice(indexToAddMany,0,[...currentValue]);
                
                break;
            case "contains":
                console.log(nums.indexOf(currentValue[0]));
                break;
            case "remove":
                let inxexToRemove = currentValue[0]
                nums.splice(inxexToRemove,1)
                break;
            case "shift": 
                let numOfRotations = currentValue[0]
                for(let i = 0; i < numOfRotations; i++){
                    nums.push(nums.shift());
                }
                break;
            case "sumPairs":
                if(nums.lenght % 2 !== 0){
                    nums.push(0);
                }
                for(i = 0; i < nums.lenght; i++){
                    sumPairs += nums[i] + nums[i + 1];
                    pairsOfSumNums.push(sumPairs);
                }
                nums = [...pairsOfSumNums];
                break;
            case "print":
                console.log(`[${nums.join(", ")}]`);
                break;          
        }
    }
    
}
arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print'])
arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])