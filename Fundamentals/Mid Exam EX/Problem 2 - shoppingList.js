function shoppingList(input) {

    let initialList = input.shift().split('!');
    let commandsAndItems = input.slice();
    let currentCommand = commandsAndItems.shift();
    
    while(currentCommand !== "Go Shopping!"){

        let line = currentCommand.split(" ");
        let command = line[0];
        let item = line[1];
        let item2 = line[2];

        if(command === "Urgent" && !initialList.includes(item)) {
             initialList.unshift(item);
        }
        else if(command === "Unnecessary" && initialList.includes(item)) {
             let forRemoval = initialList.indexOf(item);
             initialList.splice(forRemoval, 1);
        }
        else if(command === "Correct" && initialList.includes(item)) {
             let forRemoval = initialList.indexOf(item);
             initialList.splice(forRemoval, 1, item2);
        }
        else if(command === "Rearrange" && initialList.includes(item)){
             let rearrange = initialList.indexOf(item);
             initialList.splice(rearrange, 1);
             initialList.push(item);
        }
        currentCommand = commandsAndItems.shift();
        
    }
    console.log(initialList.join(", "));
} 
//ALTERNATIVE CODE

// function solve(array) {
    
//      const arr = array.slice(0);
//      let list = arr.shift().split("!");
//      let comandAndItem = arr.shift();
 
//      while(comandAndItem !== "Go Shopping!"){
//          let [comand, item, item2] = comandAndItem.split(" ");
//          comandAndItem = arr.shift();
//          switch (comand) {
//              case "Unnecessary":
//                  if(list.includes(item)){
//                      let indexOfItem = list.indexOf(item);
//                      list.splice(indexOfItem,1);
//                  }
//                  break;
//              case "Urgent":
//                  if(!list.includes(item)){
//                      list.unshift(item);
//                  }
//                  break;
//              case "Correct":
//                  if(list.includes(item)){
//                      let indexOfItem = list.indexOf(item);
//                      list.splice(indexOfItem,1,item2)
//                  }
//                  break;
//              case "Rearrange":
//                  if(list.includes(item)){
//                      let indexOfItem = list.indexOf(item);
//                      list.splice(indexOfItem,1,).push(item);
//                  }
//                  break;
         
//              default:
//                  break;
//          }
//      }
//      console.log(list.join(", "));
 
// }
shoppingList((["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"])
)

shoppingList((["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Urgent Sugar",
"Unnecessary Milk",
"Unnecessary Sugar",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Salt",
"Correct Tomatoes Potatoes",
"Go Shopping!"])
)