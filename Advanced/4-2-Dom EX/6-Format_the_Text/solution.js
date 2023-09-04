function solve() {
  const collection = document.querySelectorAll("p");
  for (let i = 0; i < collection.length; i++) {
    collection[i].remove();
  }
  const input = document.getElementById("input").value.split(".");
  const out = document.getElementById("output");
  let counter = 0;
  let temp = [];

  for (let i = 0; i < input.length; i++) {
    temp.push(input[i]);
    counter++;
    if (counter === 3) {
      const para = document.createElement("p");
      const node = document.createTextNode(`${temp.join(".")}.`);
      para.appendChild(node);
      out.appendChild(para);
      counter = 0;
      temp = [];
    } else if (counter < 3 && i === input.length - 1) {
      const para = document.createElement("p");
      const node = document.createTextNode(temp.join("."));
      para.appendChild(node);
      out.appendChild(para);
      counter = 0;
      temp = [];
    }
  }
}
