function solve(currStock,orderd) {

    const stock = {};
    const currStockL = currStock.length;
    const orderdL = orderd.length;

    for(let i = 0; i < currStockL; i++){
        const item = currStock[i];
        i++;
        const pcs = Number(currStock[i]);
        stock[item] = pcs;
    }
    for(let i = 0; i < orderdL; i++){
        const item = orderd[i];
        i++;
        const pcs = Number(orderd[i]);
        if(stock[item]){
            stock[item] += pcs;
        }else{
            stock[item] = pcs;
        }
    }
    for (const item in stock) {
        console.log(`${item} -> ${stock[item]}`);        
    }

    
    
}
solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    

    )
// solve([
//     'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
//     ],
//     [
//     'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
//     ]
    
//     )