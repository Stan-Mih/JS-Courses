function meetings(arr) {

    const shcedule = {};

    for(let input of arr){
        let [day, person] = input.split(' ');
        if(shcedule[day]){
            console.log(`Conflict on ${day}!`);
        }else{
            shcedule[day] = person;
            console.log(`Scheduled for ${day}`);
        }
        
    }for(let day in shcedule){
        console.log(`${day} -> ${shcedule[day]}`);
    }

}meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)
console.log("---------------");
meetings(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']
)