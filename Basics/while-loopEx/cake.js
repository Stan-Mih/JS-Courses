function cake(input) {
    let index = 0;
    let cakeL = Number(input[index]);
    index++;
    let cakeW = Number(input[index]);
    index++;
    let dataInput = input[index];
    index++;
    let cakeSize = cakeL * cakeW;
    let stpoCake = false;

    while(dataInput !== "STOP"){
                let cakeEaten = Number(dataInput);
        cakeSize -= cakeEaten

        if(cakeSize <= 0){
            console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`); break;
        }
        dataInput = input[index];
        index++;
        if(dataInput === "STOP"){
            stpoCake = true;
        }
    }
    if (stpoCake === true) {
    console.log(`${cakeSize} pieces are left.`);
    }
}cake (["10",
"2",
"2",
"4",
"6",
"STOP"])








