function stock(input) {
  let fruit = input[0];
  let day = input[1];
  let count = Number(input[2]);
  let price = 0;

  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        if (fruit === "banana"){
        price = count * 2.50
    }else if (fruit === "apple"){
        price = count * 1.20
    }else if (fruit === "orange"){
        price = count * 0.85
    }else if (fruit === "grapefruit"){
        price = count * 1.45
    }else if (fruit === "kiwi"){
        price = count * 2.70
    }else if (fruit === "pineapple"){
        price = count * 5.50
    }else if (fruit === "grapes"){
        price = count * 3.85
    }else console.log("error"); break;

    case "Saturday":
    case "Sunday":
        if (fruit === "banana"){
            price = count * 2.70
        }else if (fruit === "apple"){
            price = count * 1.25
        }else if (fruit === "orange"){
            price = count * 0.90
        }else if (fruit === "grapefruit"){
            price = count * 1.60
        }else if (fruit === "kiwi"){
            price = count * 3.00
        }else if (fruit === "pineapple"){
            price = count * 5.60
        }else if (fruit === "grapes"){
            price = count * 4.20
        }else console.log("error");
    default : console.log("error");

  }
}
console.log(price.toFixed(2))

stock(["kiwi",
"Tuesday",
"2.5"])

