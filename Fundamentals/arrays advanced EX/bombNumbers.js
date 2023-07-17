function bombNumbers(arr, nums) {

    let array = arr.slice(0);
    const bomb = nums[0];
    const radius = nums[1];
    const arrayL = array.length;

    for (let i = 0; i < arrayL; i++) {
        let currentEl = array[i];
        if(currentEl === bomb){
            array.splice(i-radius, 1 + 2*radius)               
        }
    }
    
    let sumOfArray = 0;
    for(let i of array){
        sumOfArray += i;
    }
    console.log(sumOfArray);
    
 }bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],[4, 2])
 bombNumbers([1, 4, 4, 2, 8, 9, 1],[9, 3])
bombNumbers([1, 7, 7, 1, 2, 3],[7, 1])
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],[2, 1])