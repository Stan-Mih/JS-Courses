function blackFlag(arr) {

    let days = Number(arr[0]);
    let daylyPlunder = Number(arr[1]);

    let expextedPlunder = Number(arr[2]);

    let totalPlunder = 0;


    for(i = 1; i <= days; i++){

        totalPlunder += daylyPlunder
        if(i % 3 === 0){
            totalPlunder += daylyPlunder * 0.5;
        }if(i % 5 === 0){
            totalPlunder  *= 0.7;
        }
    }

    if(totalPlunder >= expextedPlunder){
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    }else(console.log(`Collected only ${((totalPlunder / expextedPlunder) * 100).toFixed(2)}% of the plunder.`))

    

}blackFlag((["5",
"40",
"100"])
)
blackFlag((["10",
"20",
"380"])
)