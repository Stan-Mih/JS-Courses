function sumDigits(num){

    let toStr = num.toString().split("");
    sum = 0;

    toStr.forEach(element => {
        sum+=Number(element)
    });
    console.log(sum);

}sumDigits(245678)
sumDigits(97561)
sumDigits(543)

