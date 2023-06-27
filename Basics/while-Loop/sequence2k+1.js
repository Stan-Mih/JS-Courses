function sequence2k1(input) {
    let index = 0;
    let n = Number(input[index]);
    let num = 1
    console.log(1);
    while(num < n){
        num *= 2;
        num ++;
        if(num <= n){
        console.log(num);}
    }

}sequence2k1(["17"])