function signCheck(a,b,c) {

        function check(a,b){
        if(a > 0 && b < 0){
            return -1;
        }if(a < 0 && b > 0){
            return -1;
        }else{
            return 1;
        }
    }
    let result = check(check(a,b),c);

    if(result === -1){
        console.log("negative");
    }else{
        console.log("positive");
    }
}
signCheck( 5,
    12,
   -15
   )
signCheck(-6,
    -12,
     14
    )
signCheck(-1,
    -2,
    -3
    )