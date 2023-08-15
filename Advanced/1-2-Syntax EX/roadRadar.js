function roadRadar(speed, area) {

    let speedLimit = 0;
    let status = "";
    
    switch (area) {
        case "residential":
            speedLimit = 20;            
            break;
        case "city":
            speedLimit = 50;
            break;
        case "interstate":
            speedLimit = 90;
            break;
        case "motorway":
            speedLimit = 130;
            break;    
        default:
            break;
    }

    if(speed <= speedLimit){
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        return `Driving ${speed} km/h in a ${speedLimit} zone`;
    }
    
    if(speed > speedLimit && speed <= speedLimit + 20){
       status = "speeding";
    }else if(speed > speedLimit && speed <= speedLimit + 40){
        status = "excessive speeding";
    }else if(speed > speedLimit && speed > speedLimit + 40){
        status = "reckless driving";
    }
    console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speed} - ${status}`);
    return `The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speed} - ${status}`;
}

roadRadar(40, 'city')
roadRadar(21, 'residential')
roadRadar(120, 'interstate')
roadRadar(200, 'motorway')
