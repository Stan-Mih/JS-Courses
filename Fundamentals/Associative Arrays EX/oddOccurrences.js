function oddOccurrences(str) {
  const toArr = str.split(" ");

  const words = {};
  const toPrintObj = {};
    
  for (let i of toArr) {
    if (typeof i === "string") {                   //to lower case
      i = i.toLowerCase();
    }
    if (words.hasOwnProperty(i)) {
      words[i] += 1;
    } else {
      words[i] = 1;
    }
  }
  for (let i in words) {
    if(words[i] % 2 !== 0){                         //checking if odd
        toPrintObj[i] = words[i];
    }
  }
  for(let i = 0; i <toArr.length; i++){
    toArr[i]= (toArr[i]).toLowerCase();
  }
  
  const finalPrint = [];
  for(let u of toArr){
    if(toPrintObj[u] && !finalPrint.includes(u)){
        finalPrint.push(u);
    }
  }
 console.log(finalPrint.join(" "));
}
oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
console.log("++++++++++++++++");
oddOccurrences("Cake IS SWEET is Soft CAKE sweet Food");
