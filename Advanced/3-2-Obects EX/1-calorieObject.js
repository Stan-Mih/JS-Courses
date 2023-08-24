function calorieObject(input) {

    const obj = {};
    input.forEach((el ,i) => {
        if(i % 2 === 0){
            obj[el] = input[i+1];
        }
    });
    console.log(obj);
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])
