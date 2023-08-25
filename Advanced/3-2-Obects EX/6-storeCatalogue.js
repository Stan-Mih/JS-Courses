function storeCatalogue(array) {
  const catal = [];
  const obj = {};
  let firsLetter = "";

  array.forEach((el) => {
    const [item, price] = el.split(" : ");
    catal[item] = Number(price);
    obj[item] = price;
  });
  const keys = Object.keys(catal).sort((a, b) => a.localeCompare(b));

  keys.forEach((el) => {
    const letter = el.charAt(0);
    if (firsLetter === letter) catal.push(`${el}`);
    else {
      catal.push(letter);
      catal.push(el);
      firsLetter = letter;
    }
  });
  catal.forEach((el) => {
    if (el.length > 1) console.log(`  ${el}: ${obj[el]}`);
    else {
      console.log(el);
    }
  });
}
storeCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
storeCatalogue([
  "Banana : 2",
  "Rubic's Cube : 5",
  "Raspberry P : 4999",
  "Rolex : 100000",
  "Rollon : 10",
  "Rali Car : 2000000",
  "Pesho : 0.000001",
  "Barrel : 10",
]);
