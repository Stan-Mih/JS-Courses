function solve() {

  const input = document.getElementById("text").value;
  const convention = document.getElementById("naming-convention").value;
  let result = '';

  const inputL = input.toLowerCase();

  if(convention === "Camel Case"){
    const array = inputL.split(" ");
    result += array[0];
    for(let i = 1; i < array.length; i++){
      const word = array[i];
      const newWord = word.charAt(0).toUpperCase() + word.slice(1);
      result+=newWord;
    }
  }else if(convention === "Pascal Case"){
    const array = inputL.split(" ");
    for(let i = 0; i < array.length; i++){
      const word = array[i];
      const newWord = word.charAt(0).toUpperCase() + word.slice(1);
      result+=newWord;
    }
  }else {
    result = "Error!"
  }
  document.getElementById("result").textContent = result;
}