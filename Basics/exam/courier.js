function courier(input){
    let weight = Number(input[0]);
    let typeOfTransport = input[1];
    let distance = Number(input[2]);
    
        let price = 0;

    switch(typeOfTransport){
        case "standard" :
            if(weight < 1 ){
                price = 0.03;
            }else if(weight >= 1 && weight < 10){
                price = 0.05 * distance;
            }else if(weight >= 10 && weight < 40){
                price = 0.10 * distance;
            }else if(weight >= 40 && weight < 90){
                price = 0.15 * distance;
            }else if(weight >= 90 && weight <=150){
                price = 0.20 * distance;
            } break;
        case "express" :
            if(weight < 1 ){
                price = (0.03 +(0.03 * 0.80 * weight)) * distance;
            }else if(weight >= 1 && weight < 10){
                price = (0.05 +(0.05 * 0.40 * weight)) * distance;
            }else if(weight >= 10 && weight < 40){
                price = (0.10 +(0.10 * 0.05 * weight)) * distance;
            }else if(weight >= 40 && weight < 90){
                price = (0.15 + (0.15* 0.02 * weight)) * distance;
            }else if(weight >= 90 && weight <= 150){
                price = (0.20 + (0.20 * 0.01 * weight)) * distance;
            } break;   
    }
console.log(`The delivery of your shipment with weight of ${weight.toFixed(3)} kg. would cost ${price.toFixed(2)} lv.`);
}courier(["1.5",
"standard",
"100"])






