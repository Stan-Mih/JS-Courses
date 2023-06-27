function treasureHunt(input) {

    let chest = input.shift().split("|");
    let commandsAndGoods = input.shift();

    while(commandsAndGoods !== "Yohoho!"){
        let currCommandAndGoods = commandsAndGoods.split(" ");
        let command = currCommandAndGoods.shift();
        
        switch(command) {
            case "Loot" :
                for(let i of currCommandAndGoods){
                    if(chest.includes(i)){
                    }else(chest.unshift(i));
                }
                break;

            case "Drop" :
                let index = +currCommandAndGoods;
                if(chest[index]){
                    let removed = chest.splice(index,1).shift();
                    chest.push(removed);
                }
                break;

            case "Steal" :
                let count = +currCommandAndGoods;
                let stolenItems = [];
                for(let i = 1; i <= count ; i++){
                    let popped = chest.pop();
                    stolenItems.unshift(popped);
                    }
                    console.log(stolenItems.join(", "));
                break;

        }
        commandsAndGoods = input.shift();
    }

    let alItemsLength = 0;

    for(let i of chest){
    alItemsLength += i.length;
    }
    let avrgGain = Number(alItemsLength / chest.length);

    if(avrgGain >= 0){
        console.log(`Average treasure gain: ${avrgGain.toFixed(2)} pirate credits.`); 
    }else(console.log("Failed treasure hunt."));
      

}treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"])




treasureHunt(["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"])
