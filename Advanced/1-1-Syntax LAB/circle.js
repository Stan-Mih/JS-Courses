function area (radius) {

    let type = typeof radius;

    if(type == "number"){

        let result = Math.PI * Math.pow(radius, 2);
        console.log(result.toFixed(2));

    }else{
        console.log(`Can't calculate input is ${type}`);
    }
    

}area(5)
area("name")