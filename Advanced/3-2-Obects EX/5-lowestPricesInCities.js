function lowestPricesInCities(input) {

    const storage = {};

    for (const el of input) {
        let [town, prod, price] = el.split(' | ');
        price = Number(price);

        if(!storage[prod]) {
            storage[prod] = {town, price}          
        }else{
            if(storage[prod].price > price){
                storage[prod].price = price;
            }
        }
    }
    const products = Object.keys(storage);
    products.map(p => console.log(`${p} -> ${storage[p].price} (${storage[p].town})`))

   
    console.table(storage)
   
}
lowestPricesInCities(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
)
