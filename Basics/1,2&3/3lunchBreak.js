function lunchBreakinput (input){
    let seriesName = input[0]
    let seriesLenght = Number(input[1])
    let lunchBreak = Number(input[2])

    let lunchTime = lunchBreak * 0.125
    let restTime = lunchBreak * 0.25

    let timeLeft = lunchBreak - (lunchTime + restTime)
    let timeAfterAll = Math.abs(seriesLenght - timeLeft)


    timeAfterAll = Math.ceil(timeAfterAll)

    if(timeLeft >= seriesLenght){
        console.log(`You have enough time to watch ${seriesName} and left with ${timeAfterAll} minutes free time.`)
    }else{
        console.log(`You don't have enough time to watch ${seriesName}, you need ${timeAfterAll} more minutes.`)

    }

}
lunchBreakinput(["Teen Wolf",
"48",
"60"])




