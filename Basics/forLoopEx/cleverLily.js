function cleverLily(input){
    let age = Number(input[0]);
    let wMPrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let toyCount = 0;
    let money = 0;
    let bDayMoney = 0;

    for(i = 1; i <= age; i++){
        if(i % 2 === 0){
            bDayMoney += 10;
            money += bDayMoney;
            money -- ;
        }else if(i % 2 !== 0){
                toyCount++;
        }
    }
    money += toyCount * toyPrice;
    
    let diff = Math.abs(money - wMPrice)

    if(money >= wMPrice){
        console.log(`Yes! ${diff.toFixed(2)}`);
    }else{
        console.log(`No! ${diff.toFixed(2)}`);
    }
}cleverLily(["10",
"170.00",
"6"])

