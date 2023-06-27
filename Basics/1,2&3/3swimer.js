function swimmer(input){

    let record = Number(input[0])
    let distance = Number(input[1])
    let timePerMeter = Number(input[2])

    let time = distance * timePerMeter
    let timeResistance = Math.floor(distance / 15)*12.5

    let ivanTime = time + timeResistance
   
    if(ivanTime >= record){
        let diff = ivanTime - record
        diff = diff.toFixed(2)
        console.log(`No, he failed! He was ${diff} seconds slower.`)

    }else if(ivanTime < record) {
    ivanTime = ivanTime.toFixed(2)
        console.log(`Yes, he succeeded! The new world record is ${ivanTime} seconds.`)}
}
swimmer(["10464",
"1500",
"20"])











