function evenNum(input) {
  let evenOrNot = Number(input[0]);

  let division = evenOrNot % 2;

  let even = 1 !== division;

  console.log(even);
}
evenNum(["123"]);
