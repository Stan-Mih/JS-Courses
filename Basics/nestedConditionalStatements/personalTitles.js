function personalTitle (input){
    let gender = input[1]
    let age = Number(input[0])

    if(gender == "m"){
       if (age >= 16){
           console.log("Mr.")
       }else if (age < 16){
           console.log("Master");
       }
       }
       
       if(gender == "f"){
        if (age >= 16){
            console.log("Ms.");
        }else if(age < 16){
            console.log("Miss");
        }}
    
} personalTitle(["17",
"m"])
