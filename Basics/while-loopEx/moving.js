function moving(input) {
    let index = 0;
    let w = Number(input[index]);
    index++;
    let l = Number(input[index]);
    index++;
    let h = Number(input[index]);
    index++;
    let data = input[index];
    index++;
    let size = w * l * h 
    let finished = false;

    while(data !== "Done"){
        let stuff = Number(data);
        size -= stuff;

        if (size <= 0){
            console.log(`No more free space! You need ${Math.abs(size)} Cubic meters more.`); break;
        }
        data = input[index];
        index++;
        if(data === "Done"){
            finished = true;
        }
    }
    if(finished === true){
        console.log(`${size} Cubic meters left.`);
    }
}moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])


