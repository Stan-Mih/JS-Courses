function convertToObject(input) {

let object  = JSON.parse(input);

for(i of Object.keys(object)){
    console.log(`${i}: ${object[i]}`);
}
//return object;

}convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}')