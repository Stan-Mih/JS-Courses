function equpment(input) {
  let year = Number(input[0]);

  let sneakers = year - year * 0.4;

  let outfit = sneakers - sneakers * 0.2;

  let ball = outfit / 4;

  let accesories = ball / 5;

  let total = year + sneakers + outfit + ball + accesories;

  console.log(total);
}
equpment(["365"]);
