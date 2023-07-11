function arrayManipulations(param) {

   let arr = param.shift().split(" ")
   
   for (const input of param) {
       let commandAndValue = input.split(" ");
       let command = commandAndValue[0];
       let value = commandAndValue[1];

       switch (command) {
           case "Add":
               arr.push(value);
               break;
       
           case "Remove":
               let newArr = arr.filter(char => char !== value)
               arr = newArr;
               break;
       
           case "Insert":
               let index = commandAndValue[2];
               arr.splice(index,0,value)
               break;
       
           case "RemoveAt":
               arr.splice(value,1);
               break;
       
           default:
               break;
       }
   }
   console.log(arr.join(" "));
}  
arrayManipulations(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2']
)
arrayManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
)