function oscars(input) {
let index = 0;
let name = input[index];
index++;
let points = Number(input[index]);
index++;
let evaNum = Number(input[index]);
index++;

let nominee = false;

for(i = 1; i <= evaNum; i++){
    let currName = input[index];
    index++;
    let currPoints = Number(input[index]);
    index++
    let result = currName.length * currPoints / 2;
    points += result;
    if(points > 1250.5){
        console.log(`Congratulations, ${name} got a nominee for leading role with ${points.toFixed(1)}!`)
        nominee = true;
        break;
    }
}if(!nominee){
let diff = 1250.5 - points
console.log(`Sorry, ${name} you need ${diff.toFixed(1)} more!`)}

}oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])

