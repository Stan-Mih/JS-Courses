function foodOrdering(input) {

    let chicken = Number(input[0]) 
    let fish = Number(input[1])
    let veggy = Number(input[2])

    let chickenMenue = chicken * 10.35
    let fishMenue = fish * 12.40
    let veggyMenue = veggy * 8.15

    let semitotal = chickenMenue + fishMenue + veggyMenue
    
    let desert = semitotal * 0.20

    let total = semitotal + desert + 2.50

    console.log(total)
}

foodOrdering(['2','4','3'])