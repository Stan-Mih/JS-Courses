function onTimeForTheExam(input){
    let exHour = Number(input[0])
    let exMin = Number(input[1])
    let arrHour = Number(input[2])
    let arrMin = Number(input[3])

    let timeEx = exHour * 60 + exMin
    let timeArr = arrHour * 60 + arrMin

    if(timeArr > timeEx){
        console.log("Late")
    }else if(timeArr === timeEx || timeEx - timeArr <= 30){
        console.log("On time");
    }else if(timeEx - timeArr > 30){
        console.log("Early");
    }
    timeDiff = Math.abs(timeEx - timeArr)
    hoursDiff = Math.floor(timeDiff / 60)
    minsDiff = timeDiff % 60

    if(timeEx === timeArr){
    }else if(timeEx > timeArr && timeDiff < 60){
        console.log(`${timeDiff} minutes before the start`)
    }else if(timeEx > timeArr && timeDiff >= 60){
        if (minsDiff < 10 && minsDiff !== 0){  
            console.log(`${hoursDiff}:0${minsDiff} hours before the start`)
            }else if(minsDiff > 10){
            console.log(`${hoursDiff}:${minsDiff} hours before the start`)
            }else if(minsDiff === 0){
                console.log(`${hoursDiff}:00 hours before the start`)
                }
    }
    if(timeArr === timeEx){
    }else if(timeEx < timeArr && timeDiff < 60){
        console.log(`${timeDiff} minutes after the start`)
    }else if(timeEx < timeArr && timeDiff >= 60){
        if (minsDiff < 10 && minsDiff !== 0){  
        console.log(`${hoursDiff}:0${minsDiff} hours after the start`)
        }else if(minsDiff > 10){
        console.log(`${hoursDiff}:${minsDiff} hours after the start`)
        }else if(minsDiff === 0){
            console.log(`${hoursDiff}:00 hours after the start`)
            }
    }
    }onTimeForTheExam(["16",
    "00",
    "15",
    "00"])
    









