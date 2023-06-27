function trip(input){
    let budget = Number(input[0])
    let season = input[1]
    let price = 0
    let housing = "unknown"
    let place = "unknown"

    if(budget <= 100){
        place = "Bulgaria"
        if(season === "summer"){
            price = budget * 0.30
        }else if(season === "winter"){
            price = budget * 0.70
        }
    }else if(budget <= 1000){
        place = "Balkans"
        if(season === "summer"){
            price = budget * 0.40
        }else if(season === "winter"){
            price = budget * 0.80
        }
    }else if(budget > 1000){
        housing = "Hotel"
        place = "Europe"
        price = budget * 0.90
    }

    if(place === "Europe"){
        housing = "Hotel"
    }else if(season === "winter"){
        housing = "Hotel"
    }else if (season === "summer"){
        housing = "Camp"
    }
console.log(`Somewhere in ${place}`)
console.log(`${housing} - ${price.toFixed(2)}`);

}trip(["50", "summer"])