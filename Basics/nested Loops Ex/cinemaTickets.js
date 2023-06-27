function cinemaTickets(input) {

    let index = 0;
    let inputData = input[index];
    index++;
    let standart = 0;
    let studnet = 0;
    let kid = 0;

    while(inputData !== "Finish"){
        let movie = inputData; // need to update input data at the end of cycle
        let freeSeats = +(input[index]);
        index++;

        while(input[index] !== "End"){
            let typeOfSeat = input[index];
            switch (typeOfSeat){
                case "standard" : standart++; index++; break;
                case "student" : studnet++; index++; break
                case "kid" : kid++; index++; break
            }
        }
            
            
    }
    
}cinemaTickets(["Taxi",
"10",
"standard",
"kid",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])
