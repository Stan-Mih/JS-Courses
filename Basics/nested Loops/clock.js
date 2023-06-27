function clock () {
let a = 0
    for(h = 0; h <= 23; h++){
        for(min = 0; min <= 59; min++){
            for(sec = 0; sec <=59; sec++){
            console.log(`${h}:${min}:${sec}`);
            a++;
            }
        }
    }
    console.log(a);
}clock()