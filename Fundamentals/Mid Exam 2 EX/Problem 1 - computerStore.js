function computerStore(input) {
   
    let param = input.shift();
    let total = 0;

    while(param !== 'special' && param !== 'regular'){

        let price  = Number(param);

        if(price >= 0){
            total += price;

        }else(console.log("Invalid price!"));
                            
        param = input.shift(); 
    }

    let totalWithiutTax = total;
    total = total * 1.20
    let taxes = total - totalWithiutTax;

    if(total <= 0){
        console.log("Invalid order!");
    }else if(total > 0){
       if(param === "special") {
        console.log("Congratulations you've just bought a new computer!");
       console.log(`Price without taxes: ${totalWithiutTax.toFixed(2)}$`); 
       console.log(`Taxes: ${taxes.toFixed(2)}$`); 
       console.log('-----------'); 
       console.log(`Total price: ${((total * 0.90).toFixed(2))}$`);

       }else if(param === "regular"){
       console.log("Congratulations you've just bought a new computer!");
       console.log(`Price without taxes: ${totalWithiutTax.toFixed(2)}$`); 
       console.log(`Taxes: ${taxes.toFixed(2)}$`); 
       console.log('-----------'); 
       console.log(`Total price: ${total.toFixed(2)}$`);
       }
    }
   
    

}
computerStore(([
    '1023', 
    '15', 
    '-20',
    '-5.50',
    '450', 
    '20', 
    '17.66', 
    '19.30', 'regular'
    ])
    )
    