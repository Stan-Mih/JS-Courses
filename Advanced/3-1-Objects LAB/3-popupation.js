function cityTaxes(name, population , treasury) {

    const city = {

        name : name,
        population : population,
        treasury : treasury,
        taxRate : 10,

        collectTaxes(){
        city.treasury += city.population * city.taxRate;
        },
        applyGrowth(percentage) {
            city.population +=  (city.population / 100) * percentage
        },
        applyRecession(percentage) {

        }
    }
    return city;
}
const city =
cityTaxes('Tortuga',
7000,
15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);



// const city = 
//     cityTaxes('Tortuga',
//     7000,
//     15000);
//   console.table(city);
  