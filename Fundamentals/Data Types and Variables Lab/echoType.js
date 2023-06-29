function echo(input) {
    let type = typeof input
    
    if (type !== "string" && type !== "number"){
        console.log(type);
        console.log("Parameter is not suitable for printing");
    }else{
    console.log(type);
    console.log(input);
    }
}echo('Hello, JavaScript!')
echo(18)
echo(null)