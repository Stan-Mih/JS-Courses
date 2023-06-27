function houseParty(arr) {
  let arrL = arr.length;
  let matrix = [];
  let partyList = [];

  for (let i = 0; i < arrL; i++) {
    let comand = arr[i].split(" ");
    matrix.push(comand);
  }
  for (let u = 0; u < arrL; u++) {
    let currentCommand = matrix[u];
    let name = currentCommand[0];

    if (matrix[u].length === 3 && !partyList.includes(name)) {
      partyList.push(name);
    } else if (matrix[u].length === 3 && partyList.includes(name)) {
      console.log(`${name} is already in the list!`);
    } else if (matrix[u].length === 4 && !partyList.includes(name)) {
      console.log(`${name} is not in the list!`);
    } else if (matrix[u].length === 4 && partyList.includes(name)) {
      let index = partyList.indexOf(name);
      partyList.splice(index, 1);
    }
  }
  console.log(partyList.join("\n"));
}
houseParty([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!",
]);
houseParty([
  "Tom is going!",
  "Annie is going!",
  "Tom is going!",
  "Garry is going!",
  "Jerry is going!",
]);
