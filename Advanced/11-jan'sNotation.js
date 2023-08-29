function jansNotation(input) {
    nums = [];
    let flag = false;
    let operations = {          
        "+" : (a,b) =>{ return a+b},
        "-" : (a,b) => { return b-a},
        "*" : (a,b) => { return a*b},
        "/" : (a,b) => { return a/b},
    }
    input.forEach(el => {        
        if(typeof el === "number") nums.push(el)
        else{
            if(nums.length < 2 ) {
                console.log("Error: not enough operands!");
                flag = true;
            }
            else {
                nums.push(operations[el](nums.pop(), nums.pop()))                
            }
        }
    });
    if(nums.length > 1) console.log("Error: too many operands!");   //too many operands!
    else if(!flag)console.log(nums[0]); 
    
}
// jansNotation([3,
//     4,
//     '+']
//    )
// jansNotation([5,
//     3,
//     4,
//     '*',
//     '-']
//    )
jansNotation([7,
    33,
    8,
    '-']
   )
jansNotation([15,
    '/']
   )