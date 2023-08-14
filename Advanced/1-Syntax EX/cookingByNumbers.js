function cookingByNumbers(...imput) {
    
let num = Number(imput.shift());

imput.forEach(element => {
    switch (element) {
        case 'chop':
            num /= 2;
            break;
        case 'dice':
            num = Math.sqrt(num);
            break;
        case 'spice':
            num ++;
            break;
        case 'bake':
            num *= 3;
            break;
        case 'fillet':
            num *= 0.8;
            break;
    
        default:
            break;
    }
    console.log(num);
});

}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')







