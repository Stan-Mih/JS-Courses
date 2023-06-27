function biscuitFactory(input) {

    let biscuitPerWorker = input[0];
    let workerCount = input[1];
    let competingFactory = input[2];

    let thirdDayProduction = Math.floor((biscuitPerWorker * 0.75) * workerCount);
    let everyDayProduction = biscuitPerWorker * workerCount;

    let totalProduction = (thirdDayProduction * 10) + (everyDayProduction * 20);

    let diff = totalProduction - competingFactory;

    let diffPercent = ((diff / competingFactory) * 100).toFixed(2);

    console.log(`You have produced ${totalProduction} biscuits for the past month.`);
    if(diffPercent < 0){
        diffPercent = (diffPercent * -1).toFixed(2);
        console.log(`You produce ${diffPercent} percent less biscuits.`);
    }else{
        console.log(`You produce ${diffPercent} percent more biscuits.`);
    }
}

biscuitFactory(["78", "8","16000"])
