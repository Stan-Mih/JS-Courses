function trekkingMania(input) {
    let index  = 0;
    let groups = Number(input[index]);
    index++;

    let musala = 0;
    let montBlan = 0;
    let kilimanjaro = 0 ;
    let k2 = 0;
    let everest = 0;

    let sumOfPeople = 0;

    for(i = 1; i <= groups; i++){
        let peopleInGroup = Number(input[index])
        index++;
        if(peopleInGroup <= 5){
            musala += peopleInGroup;
        }else if(peopleInGroup > 5 && peopleInGroup <= 12){
            montBlan += peopleInGroup;
        }else if(peopleInGroup > 12 && peopleInGroup <= 25){
            kilimanjaro += peopleInGroup;
        }else if(peopleInGroup > 25 && peopleInGroup <=40){
            k2 += peopleInGroup;
        }else if(peopleInGroup > 40){
            everest += peopleInGroup;
        }sumOfPeople += peopleInGroup
        
    
    }
    console.log(`${(musala / sumOfPeople *100).toFixed(2)}%`);
    console.log(`${(montBlan / sumOfPeople *100).toFixed(2)}%`);
    console.log(`${(kilimanjaro / sumOfPeople *100).toFixed(2)}%`);
    console.log(`${(k2 / sumOfPeople *100).toFixed(2)}%`);
    console.log(`${(everest / sumOfPeople *100).toFixed(2)}%`);


}trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])

