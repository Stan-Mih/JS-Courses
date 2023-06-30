function gladiatorExpenses(e,a,b,c,d) {

    const lostFights = e;
    const helmetPrice = a;
    const swordPrice = b;
    const shieldPrice = c;
    const armorPrice = d;

    let helmetCounter = 0;
    let sowrdCounter = 0;
    let shieldCounter = 0;
    

    let replacedHelmets = 0;
    let replacedSwords = 0;
    let replacedShields = 0;
    let replacedArmors = 0;



    for(let i = lostFights; i > 0; i--){
        helmetCounter++;
        sowrdCounter++;
        if(helmetCounter % 2 === 0){
            replacedHelmets++;
            helmetCounter = 0;
        }if(sowrdCounter % 3 === 0){
            replacedSwords++;
            sowrdCounter = 0;
        }if(helmetCounter === 0 && sowrdCounter === 0 && i !== 0){
            replacedShields++;
            shieldCounter++;
        }if(shieldCounter % 2 === 0 && shieldCounter !==0){
            replacedArmors++;
            shieldCounter = 0;
        }


    }
    let totalSum = replacedHelmets * helmetPrice + replacedSwords * swordPrice + replacedShields * shieldPrice + replacedArmors * armorPrice;

    console.log(`Gladiator expenses: ${totalSum.toFixed(2)} aureus`);


}gladiatorExpenses(7,
    2,
    3,
    4,
    5
    )
gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200
    )

