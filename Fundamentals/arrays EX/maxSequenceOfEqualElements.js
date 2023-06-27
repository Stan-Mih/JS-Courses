function maxSequenceOfEqualElements (arr) {

let maxSeq = [];
let arrL = arr.length;

for(i = 0; i < arrL; i++){
    let currSeq = [];
    for(u = i; u < arrL; u++){
        if(arr[i] === arr[u]){
            currSeq.push(arr[i]);
        }else{
            break;
        }
    }if(currSeq.length > maxSeq.length){
        maxSeq = currSeq;
    }
}
console.log(maxSeq.join(' '));

}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3])
maxSequenceOfEqualElements([4, 4, 4, 4])
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3])