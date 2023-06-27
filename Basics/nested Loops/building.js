function building(input){

    let floors = +(input[0]);
    let rooms = +(input[1]);

    for(f = floors; f > 0; f--){
        let printingRooms = ""
        let roomsNumbers = 0;
        for(r = 0; r <= rooms; r++){
            if(f === floors){
                printingRooms +=(`L${f}${roomsNumbers} `);
                roomsNumbers++;
            }
            else if(f > 1 && f % 2 !== 0){
                printingRooms +=(`A${f}${roomsNumbers} `);
                roomsNumbers++;
            }
            else if(f % 2 == 0 && f !== floors){
                printingRooms +=(`O${f}${roomsNumbers} `);
                roomsNumbers++;
            }
            else if(f === 1 && f !== floors){
                printingRooms +=(`A${f}${roomsNumbers} `);
                roomsNumbers++;
            }
        }console.log(printingRooms);
    }
}building(["9", "5"])

