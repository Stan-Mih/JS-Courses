function histogram (input){
let index = 0
let n = Number(input[index]);
index++

let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;

for(i = 0; i < n; i++){
    let currentNum = Number(input[index]);
    index++;
    if(currentNum < 200){
        count1++;
    }else if(currentNum >= 200 && currentNum < 400){
        count2++;
    }else if(currentNum >= 400 && currentNum < 600){
        count3++;
    }else if(currentNum >= 600 && currentNum < 800){
        count4++;
    }else if (currentNum >=800)
    {count5++};
}
let pCount1 = count1 / n * 100;
let pCount2 = count2 / n * 100;
let pCount3 = count3 / n * 100;
let pCount4 = count4 / n * 100;
let pCount5 = count5 / n * 100;

console.log(`${pCount1.toFixed(2)}%`)
console.log(`${pCount2.toFixed(2)}%`)
console.log(`${pCount3.toFixed(2)}%`)
console.log(`${pCount4.toFixed(2)}%`)
console.log(`${pCount5.toFixed(2)}%`)


}histogram(["9",
"367", 
"99", 
"200", 
"799",
"999",
"333",
"555",
"111",
"9"])

