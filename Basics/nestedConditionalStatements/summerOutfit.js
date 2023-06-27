function summerOutfit(input){
    let deg = Number(input[0])
    let dayTime = input[1]

    let outfit = "none"
    let shoes = "none"

    if(deg >=10 && deg <=18){
        switch(dayTime){
            case "Morning": outfit = "Sweatshirt" ; shoes =  "Sneakers" ; break
            case "Afternoon": outfit = "Shirt" ; shoes =  "Moccasins" ; break
            case "Evening" : outfit = "Shirt" ; shoes =  "Moccasins" ; break
            default :
        }
    }else if(deg > 18 && deg <=24){
        switch(dayTime){
            case "Morning": outfit = "Shirt" ; shoes =  "Moccasins" ; break
            case "Afternoon": outfit = "T-Shirt" ; shoes =  "Sandals" ; break
            case "Evening" : outfit = "Shirt" ; shoes =  "Moccasins" ; break
            default :
        }
    }else if(deg >=25){
        switch(dayTime){
            case "Morning": outfit = "T-Shirt" ; shoes =  "Sandals" ; break
            case "Afternoon": outfit = "Swim Suit" ; shoes =  "Barefoot" ; break
            case "Evening" : outfit = "Shirt" ; shoes =  "Moccasins" ; break
            default :
        }
    } console.log(`It's ${deg} degrees, get your ${outfit} and ${shoes}.`)
}summerOutfit(["28",
"Evening"])


