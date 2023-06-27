function skiTrip(input){
    let stay = Number(input[0])
    let room = input[1]
    let revew = input[2] 
    let roomPrice = 0
        stay = stay - 1
    switch(room){
        case "room for one person" :  roomPrice = stay  * 18; break;
        case "apartment" : roomPrice = stay  * 25
            if(stay < 10){
                roomPrice = roomPrice * 0.70
            }else if(stay >= 10 && stay <= 15){
                roomPrice = roomPrice * 0.65
            }else if(stay > 15){
                roomPrice = roomPrice * 0.50
            } break;
        case "president apartment" : roomPrice = stay  * 35
            if(stay < 10){
                roomPrice = roomPrice * 0.90
            }else if(stay >= 10 && stay <= 15){
                roomPrice = roomPrice * 0.85
            }else if (stay > 15){
                roomPrice = roomPrice * 0.80
            } break;
    }switch(revew){
        case "positive" : roomPrice = roomPrice * 1.25; break; 
        case "negative" : roomPrice = roomPrice * 0.90; break;
    }console.log(roomPrice.toFixed(2));

}skiTrip(["30",
"president apartment",
"negative"])




