function housDecoration(input){
    let flowers = input[0]
    let count = Number(input[1])
    let budget = Number(input[2])

    let price = 0

    if (flowers === "Roses"){
        price = count * 5
    }else if (flowers === "Dahlias"){
        price = count * 3.80
    }else if (flowers === "Tulips"){
        price = count * 2.80
    }else if (flowers === "Narcissus"){
        price = count * 3
    }else if (flowers === "Gladiolus"){
        price = count * 2.50
    }

    switch (flowers){
        case "Roses" :
            if(count > 80){
                price = price * 0.90
            }; break;
        case "Dahlias" :
            if(count > 90){
                price = price * 0.85
            }; break;
        case "Tulips" :
            if(count > 80){
                price = price * 0.85
            }; break;
        case "Narcissus" :
            if(count < 120){
                price = price * 1.15
            }; break;
        case "Gladiolus" :
            if(count < 80){
                price = price * 1.20
            }; break;
        default : console.log("error"); break;
    }
        let moneyLeft = Math.abs(price - budget)
        moneyLeft = moneyLeft.toFixed(2)

    if(budget >= price){
        console.log(`Hey, you have a great garden with ${count} ${flowers} and ${moneyLeft} leva left.`)
    }else {
        console.log(`Not enough money, you need ${moneyLeft} leva more.`)
    }

}housDecoration(["Tulips",
"88",
"260"])

