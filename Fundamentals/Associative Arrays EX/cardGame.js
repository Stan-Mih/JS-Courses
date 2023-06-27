function cardGame(arr) {

    let players = {};

    for(let i of arr){
        let nameAndCards = i.split(": ");
        let name = nameAndCards[0];
        let cards = nameAndCards[1].split(", ");
        if(!players[name]){
            players[name] = cards;
        }else{
            for(let i of cards){
                players[name].push(i);
            }
        }
    }   
    for (let key in players) {
        let cards = players[key];
        let uniqueCards = [];
        let cardsL = cards.length
        for(let i = 0; i < cardsL; i++){
            let currentCard = cards.shift();
            if(!cards.includes(currentCard)){             
                uniqueCards.push(currentCard)
            }
        }
        let score = 0;
        uniqueCards.forEach(element => {
        let power = element[0];
        let type = element[1];
        if(isNaN(power)){
            switch (power) {
                case "J":
                    power = 11;
                    break;
                case "Q":
                    power = 12;
                    break;
                case "K":
                    power = 13;
                    case "A":
                    power = 14;        
                    break;
            }
        }
        switch (type) {
            case "S":
                type = 4;
                break;
            case "H":
                type = 3;
                break;
            case "D":
                type = 2;
                break;
            case "C":
                type = 1;
                break;
        
        }
        score += power * type;
        });
        players[key] = score;
    }
    for(let key in players){
        console.log(`${key}: ${players[key]}`);
    }
}cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]
    
    )
cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
    ]
    )