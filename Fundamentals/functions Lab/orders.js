function orders(item, pcs) {
    let price = 0;

    switch (item) {
        case "coffee" :
            price =  1.5 * pcs;
        case "water" :
            price = 1 * pcs;
        case "coke" :
            price = 1.4 * pcs;
        case "snacks" :
            price = 2 * pcs;
           
        default:
            break;
    }
    console.log(price);
}
 
 orders("water", 5)
 orders("coffee", 2)