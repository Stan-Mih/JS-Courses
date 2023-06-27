function tim (input) {

    let hour = Number(input[0])
    let mins = Number(input[1])

    let hourInMins = hour * 60
    let minsTotal = hourInMins + mins
    let minsFinal = minsTotal + 15

    let hours = minsFinal / 60
    let hoursFinal = Math.floor(hours)
    if (hoursFinal == 24){
        hoursFinal = 0
    }
    
    let mins1 = minsFinal % 60
    if (mins1 < 10){
        console.log(`${hoursFinal}:0${mins1}`)
    } else if (mins1 >=10){
        console.log(hoursFinal + ":" + mins1)
    }
}
tim(["12", "49"])