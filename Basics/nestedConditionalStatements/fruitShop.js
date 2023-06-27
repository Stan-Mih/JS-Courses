function stock(input) {
  let fruit = input[0];
  let day = input[1];
  let count = Number(input[2]);
  let price = 0
  
  if (day === "Monday" ||day === "Tuesday" ||day === "Wednesday" ||day === "Thursday" ||day === "Friday") {
    switch (fruit) {
      case "banana": price = 2.50 * count; break; 
      case "apple": price = 1.20 * count; break;
      case "orange": price = 0.85 * count; break;
      case "grapefruit": price = 1.45 * count; break;
      case "kiwi": price = 2.70 * count; break;
      case "pineapple": price = 5.50 * count; break;
      case "grapes": price = 3.85 * count; break;
      default : console.log("error") ;break;
      }
      if (price === 0){
      }else{
      console.log(price.toFixed(2))
      }
  }
  else if (day === "Saturday" || day === "Sunday"){
    switch(fruit){
      case "banana": price = 2.70 * count; break; 
      case "apple": price = 1.25 * count; break;
      case "orange": price = 0.90 * count; break;
      case "grapefruit": price = 1.60 * count; break;
      case "kiwi": price = 3.00 * count; break;
      case "pineapple": price = 5.60 * count; break;
      case "grapes": price = 4.20 * count; break;
      default : console.log("error") ;break;
    }
    if(price === 0){
    }else {console.log(price.toFixed(2))
    }
  }else {console.log("error")}
  
  
}stock(["tomato",
"Sunday",
"0.5"])













