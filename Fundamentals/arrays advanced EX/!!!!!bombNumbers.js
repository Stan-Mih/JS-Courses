function bombNumbers(arr, nums) {

    let array = arr.slice(0)
    let indexOfBomb = array.indexOf(nums[0]);

    while(array.includes(nums[0])){
        let explosion = array.splice(indexOfBomb - nums[1], indexOfBomb + nums[1]);
    }
    let sumOfArray = 0;
    for(let i of array){
        sumOfArray += i;
    }
    console.log(sumOfArray);
    // не работи в JUD
}bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],[4, 2])
bombNumbers([1, 4, 4, 2, 8, 9, 1],[9, 3])
bombNumbers([1, 7, 7, 1, 2, 3],[7, 1])
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],[2, 1])
