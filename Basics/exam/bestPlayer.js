function bestPlayer(input) {
    let players = [];
    let goals = [];
    let bestPlayer = '';
    let playerGoals = 0;
 
    for (let i = 0; i < input.length; i++) {
        let row = input[i];
        if (i % 2 == 0) {
            if (row.toUpperCase() == "END") {
                break;
            }
            else {
                players.push(row);
            }
        } else {
            goals.push(row);
            if (row >= 10) {
                break;
            }
        }
    }
 
    for (let i = 0; i < goals.length; i++) {
        let tempgoals = Number(goals[i]);
        if (playerGoals < tempgoals) {
            playerGoals = tempgoals;
            bestPlayer = players[i];
        }
    }
 
    console.log(`${bestPlayer} is the best player!`)
    if (playerGoals >= 3) {
        console.log(`He has scored ${playerGoals} goals and made a hat-trick !!!`)
    }
    else {
        console.log(`He has scored ${playerGoals} goals.`)
    }
 
} bestPlayer(["Rooney",
"1",
"Junior",
"2",
"Paolinio",
"2",
"END",
"Petrov",
"2",
"Drogba",
"11",
"Junior",
"2",
"Paolinio",
"2"])