function smallShop(input){
    let item = input[0]
    let city = input[1]
    let amount = Number(input[2])

    if(city == "Sofia"){
        switch (item) {
            case "coffee" : console.log(0.50 * amount); break;
            case "water" : console.log(0.80 * amount); break;
            case "beer" : console.log(1.20 * amount); break;
            case "sweets" : console.log(1.45 * amount); break;
            case "peanuts" : console.log(1.60 * amount); break;
        }
    }if(city == "Plovdiv"){
        switch (item) {
            case "coffee" : console.log(0.40 * amount); break;
            case "water" : console.log(0.70 * amount); break;
            case "beer" : console.log(1.15 * amount); break;
            case "sweets" : console.log(1.30 * amount); break;
            case "peanuts" : console.log(1.50 * amount); break;
        }
    }if(city == "Varna"){
        switch (item) {
            case "coffee" : console.log(0.45 * amount); break;
            case "water" : console.log(0.70 * amount); break;
            case "beer" : console.log(1.10 * amount); break;
            case "sweets" : console.log(1.35 * amount); break;
            case "peanuts" : console.log(1.55 * amount); break;
        }
    }
}smallShop(["sweets",
"Sofia",
"2.23"])





