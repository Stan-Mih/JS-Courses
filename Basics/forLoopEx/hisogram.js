function histogram(input) {
    let index = 0;
    let n = Number(input[index]);
    index++;
   
    let p1Coint = 0;
    let p2Coint = 0;
    let p3Coint = 0;
    let p4Coint = 0;
    let p5Coint = 0;

    for(let i = 0 ; i < n ; i++){
        let currentNum = Number(input[index]);
        index++;
    if (currentNum < 200){
        p1Coint++;
    }else if(currentNum >= 200 && currentNum < 400){
        p2Coint++; 
    }else if(currentNum >= 400 && currentNum < 600){
        p3Coint++;
    }else if(currentNum >= 600 && currentNum < 800){
        p4Coint++;
    }else if(currentNum >=800){
        p5Coint++;
    }
    }
    let p1 = p1Coint / n * 100
    let p2 = p2Coint / n * 100
    let p3 = p3Coint / n * 100
    let p4 = p4Coint / n * 100
    let p5 = p5Coint / n * 100

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);


}histogram(["14",
"53",
"7",
"56",
"180",
"450",
"920",
"12",
"7",
"150",
"250",
"680",
"2",
"600",
"200"])

