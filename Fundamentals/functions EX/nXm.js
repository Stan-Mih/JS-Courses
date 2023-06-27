function nxn(num) {
 
    // for(let n = 1; n <= num; n++){
    //     let toPrint = [];
        
    //     for(let m = 1; m <= num; m++){
    //         toPrint.push(num);
    //     }
    //     console.log(toPrint.join(" "));
    // }
    let matrix = [];
    for(let n = 0; n < num; n++){

        let row = [];

        for(let m = 0; m < num; m++){
            row.push(num);
        }
        matrix.push(row.join(" "));
    }
   console.log(matrix.join("\n"));
    
    
}nxn(7) 