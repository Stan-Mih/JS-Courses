function LargestNumber(n1,n2,n3) {

    if(n1 > n2 && n1 > n3){
        console.log(n1);
    }else if(n2 > n1 && n2 > n3){
        console.log(n2);
    }else if(n3 > n1 && n3 > n1){
        console.log(n3);
    }
    
    // const largestNum = Math.max(n1,n2,n3);
    // console.log(largestNum);
}LargestNumber(5, -3, 16)
LargestNumber(-3, -5, -22.5)