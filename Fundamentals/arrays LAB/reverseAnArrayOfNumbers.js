function reverseAnArrayOfNumbers(n, input) {
// let arr = [];
// let revArray = "";

// for(i = 0; i < n; i++){
//     arr.push(input[i]);
// }for(u = n -1; u >= 0; u--){
//     let tempArray = arr[u];
//     revArray += ` ${tempArray}`;
// }
// console.log(revArray);

let arr = [];

for(i = n - 1 ; i >= 0 ; i--){
    arr.push(input[i]);
}

console.log(arr.join(" "));

}reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])