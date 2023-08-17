function AddAndRemoveElements(arr) {

    const array = [];

    arr.forEach((el, index)=> {
        if(el === "add"){
            array.push(index + 1);
        }else{
            array.pop();
        }
    });
    if(array.length === 0){
        console.log("Empty");
    }
    console.log(array.join("\n"));
}
AddAndRemoveElements(['add', 
'add', 
'add', 
'add']
)
AddAndRemoveElements(['add', 
'add', 
'remove', 
'add', 
'add']
)
AddAndRemoveElements(['remove', 
'remove', 
'remove']
)