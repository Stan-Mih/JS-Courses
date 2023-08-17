function listOfNames(arr) {
    const array = [];

    arr
    .sort((a,b)=> a.localeCompare(b))
    .forEach((el, i)=> {
       array.push(`${i+1}.${el}`)
    });
    
    console.log(array.join("\n"));
}
listOfNames(["John", "Bob", "Christina", "Ema"])
