function solve (arr) {

    arr.sort((a,b) => a-b);
    let newArr = [];

    for(let i = 0; i <arr.length; i++){
        let big = arr.pop();
        let small = arr.shift();
        newArr.push(big);
        newArr.push(small);
    }
    console.log(newArr);
}
solve ([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]
)
solve ([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]
) 
 
