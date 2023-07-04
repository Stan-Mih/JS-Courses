function dungeonestDark(param) {

    let inputArr = param[0].split("|");

    let hp = 100;
    let coins = 0;
    let forPrint = [];

    for(let i = 0; i < inputArr.length; i++ ){
        let element = inputArr[i].split(" ");
        let itemOrMonster = element[0];
        let value = +element[1];
        
        switch (itemOrMonster) {
            case "rat":
                hp -= value;
                if(hp >= 1){
                    forPrint.push("You slayed rat.")
                }else{
                    break;
                }
                break;
            case "bat":
                hp -= value;
                if(hp >= 1){
                    forPrint.push("You slayed bat.")
                }else{
                    break;
                }
                break;
            case "boss":
                hp -= value;
                if(hp >= 1){
                    forPrint.push("You slayed boss.")
                }else{
                    break;
                }
                break;
            case "snake":
                hp -= value;
                if(hp >= 1){
                    forPrint.push("You slayed snake.")
                }else{
                    break;
                }
                break;
            case "orc":
                hp -= value;
                if(hp >= 1){
                    forPrint.push("You slayed orc.")
                }else{
                    break;
                }
                break;
            case "cat":
                hp -= value;
                if(hp >= 1){
                    forPrint.push("You slayed cat.")
                }else{
                    break;
                }
                break;
            case "chest":
                coins += value;  
                forPrint.push(`You found ${value} coins.`)
                break;
            case "potion":
                hp += value; 
                if(hp > 100){
                    let leftOver = hp - 100;
                    var healed = value - leftOver;
                    hp = 100;
                    forPrint.push(`You healed for ${healed} hp.`)
                }else{
                    forPrint.push(`You healed for ${value} hp.`)
                }
                forPrint.push(`Current health: ${hp} hp.`)
                break;
               
        
            default:
                break;
        }
        
        if(hp <= 0){
            forPrint.push(`You died! Killed by ${itemOrMonster}.`)
            console.log(forPrint.join("\n"));
            console.log(`Best room: ${i+1}`);
            break;
        }

    }
    if(hp >= 1){
        console.log(forPrint.join("\n"));
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${hp}`);
    }
    
    

}dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])