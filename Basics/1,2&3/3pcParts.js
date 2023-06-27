function pcPartsShoping(input){
    let budget = Number(input[0])
    let vCards = Number(input[1])
    let procesors = Number(input[2])
    let ram = Number(input[3])

    let vCardsPrice = vCards * 250
    let procesorsPrice = (vCardsPrice * 0.35) * procesors
    let ramPrice = (vCardsPrice * 0.10) * ram

    let finalPrice = vCardsPrice + procesorsPrice + ramPrice
    if (vCards > procesors){
        finalPrice = finalPrice *0.85
        }
    let diff = Math.abs(budget - finalPrice)
    diff = diff.toFixed(2)

    if (budget >= finalPrice){

       console.log(`You have ${diff} leva left!`)
    }else {
        console.log(`Not enough money! You need ${diff} leva more!`)
    }
    
}
pcPartsShoping(["920.45",
"3",
"1",
"1"])



