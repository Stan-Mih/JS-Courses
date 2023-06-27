function equalSums(arr) {
  let arrL = arr.length;
  let foundIndex = 'no'
  for (i = 0; i < arrL; i++) {
    let leftSum = 0;
    let rightSum = 0;

    for (l = i - 1; l >= 0; l--) {
      leftSum += arr[l];
    }
    for (r = i + 1; r < arrL; r++) {
      rightSum += arr[r];
    }
    if (leftSum === rightSum) {
      foundIndex = i
    }
    console.log();
  }
  console.log(foundIndex);
}
equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
