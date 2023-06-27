function inputArea(input) {
  let shape = input[0];
  let size = Number(input[1]);
  let size2 = Number(input[2]);

  if (shape == "square") {
    let area = size * size;
    console.log(area.toFixed(3));
  } else if (shape == "rectangle") {
    let area = size * size2;
    console.log(area.toFixed(3));
  } else if (shape == "circle") {
    let area = Math.PI * Math.pow(size, 2);
    console.log(area.toFixed(3));
  } else if (shape == "triangle") {
    let area = size / 2 
    let area2 = area * size2;
    console.log(area2)
}
}
inputArea(["triangle", "6", "7.5"]);
