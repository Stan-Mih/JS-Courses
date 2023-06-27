function bracelets(input){
    let daylyMOney = Number(input[0]);
    let dalyProfit = Number(input[1]);
    let daylyExp = Number(input[2]);
    let presentPrice = Number(input[3]);

    if(typeof daylyMOney != "number"){
        daylyMOney = 0;
    }
    
    let pocketSaved = 5 * daylyMOney;
    let profitSaved = 5 * dalyProfit;
    let totalSavedMOney = pocketSaved + profitSaved;
    totalSavedMOney -= daylyExp ;

    let diff = Math.abs (presentPrice - totalSavedMOney);
    if(totalSavedMOney >= presentPrice){
        console.log(`Profit: ${totalSavedMOney.toFixed(2)} BGN, the gift has been purchased.`);
    } else { 
        console.log(`Insufficient money: ${diff.toFixed(2)} BGN.`)
    };
}bracelets(["15.20",
"200.00",
"7.30",
"1500.12"])



