function dayOfWeek(input) {
    let daysOfWeek = ["Monday" ,"Tuesday" ,"Wednesday" ,"Thursday" ,"Friday" ,"Saturday" ,"Sunday"] 
    let day = daysOfWeek[input -1];
    if (input < 1 || input > 7){
        console.log("Invalid day!");
    }else{
        console.log(day);
    }
}dayOfWeek(5)