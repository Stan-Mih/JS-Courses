function arrayRotation(arr, rotations) {
// for(i = 0; i < rotations; i++){
//     arr.push(arr[0]);
//     arr.shift();
// }

while(rotations > 0){
    let elementToMoove = arr.shift();
    arr.push(elementToMoove);
    rotations--;
}
console.log(arr.join(" "));
}arrayRotation([51, 47, 32, 61, 21], 2)
arrayRotation([32, 21, 61, 1], 4)
arrayRotation([2, 4, 15, 31], 5)