function fruit(type, weight, cost) {

    let weightInKg = weight/ 1000;
    let total = (weightInKg) * cost;

    console.log(`I need $${total.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${type}.`);

}fruit('orange', 2500, 1.80)
fruit('apple', 1563, 2.35)
