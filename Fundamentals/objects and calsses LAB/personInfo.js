function personInfo(a, b, c) {

    let person = {
        firstName: a,
        lastName : b,
        age : c,
        "gen der" : "male",
        gay() {
            console.log("hey-hey");
        },
        fagg : function(){
            console.log("fagg");
        }
    }
    person.height = 180;
    person.hairColor = "blond"
    person["height"] = 200
    person["color"] = "grey";

   console.log(Object.keys(person));
   console.log(person['gen der']);
   
   

}personInfo("Peter", 
"Pan",
"20"
)