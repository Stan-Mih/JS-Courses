function tradeCommissions(input){
    let city = input[0]
    let s = Number(input[1])
    let comm = 0

    switch (city){
        case "Sofia" :
            if (s >= 0 && s <= 500){
                comm = s * 0.05
            }else if (s > 500 && s <= 1000){
                comm = s * 0.07
            }else if (s > 1000 && s <= 10000){
                comm = s * 0.08
            }else if (s > 10000){
                comm = s * 0.12
            }else {console.log("error")
            }if(comm <=0){
            }else {
            console.log(comm.toFixed(2))}; break;
        case "Varna" :
            if (s >= 0 && s <= 500){
                comm = s * 0.045
            }else if (s > 500 && s <= 1000){
                comm = s * 0.075
            }else if (s > 1000 && s <= 10000){
                comm = s * 0.10
            }else if (s > 10000){
                comm = s * 0.13
            }else {console.log("error")
            }if(comm <=0){
            }else {
            console.log(comm.toFixed(2))};  break;
        case "Plovdiv" :
            if (s >= 0 && s <= 500){
                comm = s * 0.055
            }else if (s > 500 && s <= 1000){
                comm = s * 0.08
            }else if (s > 1000 && s <= 10000){
                comm = s * 0.12
            }else if (s > 10000){
                comm = s * 0.145
            }else {console.log("error")
            }if(comm <=0){
            }else {
            console.log(comm.toFixed(2))}; break;
        default : console.log("error"); break;
    }

}tradeCommissions(["Varna",
"-50"])







