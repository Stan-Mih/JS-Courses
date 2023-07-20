function convertToObject(input) {

let object  = JSON.parse(input);

for(key of Object.keys(object)){
    console.log(`${key}: ${object[key]}`);
}
//return object;

}convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}')