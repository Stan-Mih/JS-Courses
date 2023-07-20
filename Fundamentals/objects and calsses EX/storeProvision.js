function storeProvision(arr1, arr2) {

    let inStock = {};
    
    for(let index = 0; index < arr1.length; index += 2){
        let currentProduct = arr1[index];
        let qty = Number(arr1[index + 1]);
        inStock[currentProduct] = qty;
    }
    let keysInStock = Object.keys(inStock);
    
    for(let index2 = 0; index2 < arr2.length; index2 += 2){
        let orderedProduct = arr2[index2];
        let qty = arr2[index2 + 1];

        if(keysInStock.includes(orderedProduct)){
            inStock[orderedProduct] += Number(qty);
        }
        inStock[orderedProduct] = Number(qty);
        
    }
        

    for(let prop in inStock){
        console.log(`${prop} -> ${inStock[prop]}`);
    }

    // ALTERNATIVE EXECUTION
    // function solve(currStock,orderd) {

    //     const stock = {};
    //     const currStockL = currStock.length;
    //     const orderdL = orderd.length;
    
    //     for(let i = 0; i < currStockL; i++){
    //         const item = currStock[i];
    //         i++;
    //         const pcs = Number(currStock[i]);
    //         stock[item] = pcs;
    //     }
    //     for(let i = 0; i < orderdL; i++){
    //         const item = orderd[i];
    //         i++;
    //         const pcs = Number(orderd[i]);
    //         if(stock[item]){
    //             stock[item] += pcs;
    //         }else{
    //             stock[item] = pcs;
    //         }
    //     }
    //     for (const item in stock) {
    //         console.log(`${item} -> ${stock[item]}`);        
    //     }              
    //}

}storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )
storeProvision([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
    'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]
    )