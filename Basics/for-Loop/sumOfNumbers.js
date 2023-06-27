function demo(input) {
    
  let data = input[0];
  let sum = 0;

  for (let index = 0; index < data.length; index++) {
    let currentNumer = Number(data[index]);
    sum = sum + currentNumer;
  }
  console.log(`The sum of the digits is:${sum}`);
}
demo(["1234"]);
