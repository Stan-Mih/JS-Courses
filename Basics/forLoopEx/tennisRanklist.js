function tennisRanklist(input) {
    let index = 0;
    let nTurnaments = Number(input[index]);
    index++;
    let startingPoints = Number(input[index]);
    index++;
    let points = 0;
    let wTurnaments = 0;

    for(i = 1; i <= nTurnaments; i++){
        let currPoints = input[index];
        index++;
            switch(currPoints){
                case "SF" : points += 720; break;
                case "F" : points += 1200; break;
                case "W" : points += 2000; break;
                default :
                }   
            if(currPoints === "W"){
                wTurnaments++;
            }  
    }
    let avareggePoins = points / nTurnaments
    

    points += startingPoints;
    let wPercent = wTurnaments / nTurnaments * 100

    console.log(`Final points: ${points}`);
    console.log(`Average points: ${Math.floor(avareggePoins)}`);
    console.log(`${wPercent.toFixed(2)}%`);

}tennisRanklist(["4",
"750",
"SF",
"W",
"SF",
"W"])



