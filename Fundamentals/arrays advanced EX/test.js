function solve (arr) {
    let list = [];

    for(let i = 0 ; i < arr.length; i++){
        let command = arr[i];
        let splited = command.split(" ");
        let name = splited[0];

        if(splited.length === 3){            
            if(list.includes(name)){
                console.log(`${name} is already in the list!`);
                continue;
            }
            list.push(splited[0]);
        }else{
            if(list.includes(name)){
                let index = list.indexOf(name);
                list.splice(index,1);
            }else{
                console.log(`${name} is not in the list!`);
            }
        }
    }
    console.log(list.join("\n"));
}
solve (['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']
)
solve (['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
) 
 
