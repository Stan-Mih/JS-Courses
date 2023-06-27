function fruitOrVeggie(input) {
  let stuff = input[0];
  switch (stuff) {
    case "banana":
    case "apple":
    case "kiwi":
    case "cherry":
    case "lemon":
    case "grapes":
      console.log("fruit"); 
    case "tomato":
    case "cucumber":
    case "pepper":
    case "carrot":
        console.log("vegetable"); break;
    default : console.log("unknown"); break;
  }
}
fruitOrVeggie(["banana"])