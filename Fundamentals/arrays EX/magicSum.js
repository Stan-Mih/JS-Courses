function magicSum(arr, sum) {
    
    let magicArr = [];
    let arrL = arr.length;

for(let i = 0; i < arrL; i++){
    let str = '';
    for(let j = i +1; j < arrL; j++){
        if(arr[i] + arr[j] === sum){
            str += `${arr[i]} ${arr[j]}`
            magicArr.push(str);
          
        }
    }
}console.log(magicArr.join('\n'));
}magicSum([1, 7, 6, 2, 19, 23],8)
magicSum([14, 20, 60, 13, 7, 19, 8],27)
magicSum([1, 2, 3, 4, 5, 6],6)


