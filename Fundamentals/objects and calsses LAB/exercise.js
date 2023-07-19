function solve(obj) {

    let objKeys = Object.keys(obj);

    for (const key of objKeys) {
        console.log(`${obj[key]} => ${key}`);          
    }
    
}
solve({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)