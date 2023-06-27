function otJSON(firstName, lastName, hairColor){

 let person = {
    name : firstName,
    lastName : lastName,
    hairColor : hairColor,
 }
 let toJSON = JSON.stringify(person);
 console.log(toJSON);
}
otJSON('George', 'Jones', 'Brown');
otJSON( 'Peter', 'Smith', 'Blond');