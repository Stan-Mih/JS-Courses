function mergeArrays(arr1, arr2) {
  // let index = 0;
  // let arrPrint = [];
  // let printString = ""

  // for(i = 0; i < arr1.length; i++){
  //     if(index % 2 === 0){
  //         arrPrint.push(+(arr1[index]) + +(arr2[index]))
  //     }else{
  //         arrPrint.push(arr1[index] + arr2[index])
  //     }index++;
  // }for(u = 0; u < arrPrint.length ; u++){
  //     printString += `${arrPrint[u]} - `
  // }let printStringMod = printString.slice(0, -3)
  // console.log(printStringMod);

  let arr3 = [];

  for (i = 0; i < arr1.length; i++) {
    if (i % 2 === 0) {
      arr3.push(+arr1[i] + +arr2[i]);
    } else {
      arr3.push(arr1[i] + arr2[i]);
    }
  }
  console.log(arr3.join(" - "));
}
mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
mergeArrays(["13", "12312", "5", "77", "4"], ["22", "333", "5", "122", "44"]);
