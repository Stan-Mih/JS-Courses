function perfectNumber(n) {

    let perfectSum = 0;

    for( i = 1; i < n; i++){

        if(n % i === 0){
            perfectSum += i;
        }
    }
     if(n === perfectSum){
        console.log('We have a perfect number!');
    }else{
        console.log("It's not so perfect.");
    }
}perfectNumber(6)
perfectNumber(28)
perfectNumber(1236498)