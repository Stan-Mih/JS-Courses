function arrayManipulations(commands) {
   let add
   let rem
   let remAt
   let insert
   
   let arr = commands
            .shift()
            .split(" ")
            .map(Number);

            for(let i = 0; i < commands.length; i++){
               let command = commands.
            }

   console.log(arr);

}arrayManipulations([
'4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
)
arrayManipulations([
'6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2']
)