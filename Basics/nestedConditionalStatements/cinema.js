function cinema(input){
    let projections = input[0]
    let row = Number(input[1])
    let column = Number(input[2])

    let income = 0
    let seats = row * column

    switch (projections){
        case "Premiere" : income = seats * 12.00; break;
        case "Normal" : income = seats * 7.50; break; 
        case "Discount" : income = seats * 5; break;
        default : console.log("error"); break;
    }  console.log(income.toFixed(2));
        console.log("leva");

}cinema(["Discount",
"12",
"30"])


