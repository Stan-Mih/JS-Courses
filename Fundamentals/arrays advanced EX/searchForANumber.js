function searchForANumber(arr1,arr2) {
    let takenNums = arr1.splice(0,arr2[0]);
    let manipuledNums = takenNums.splice(0,arr2[1]);
    let counter = 0;
    for(let i of takenNums){
        if(arr2[2] === i){
            counter++;
        }
    }
    
   console.log(takenNums);
   console.log(`Number ${arr2[2]} occurs ${counter} times.`);
    
}searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3])
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5])