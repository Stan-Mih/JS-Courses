function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    const inputA = document.querySelector("#inputs textarea").value;
    const input = JSON.parse(inputA);

    const list = [];

    input.forEach((el) => {
      //creatng objects
      const splited = el.split(" - ");
      const restaurant = splited.shift();
      const workers = splited[0].split(", ");
      const tempObj = {
        restaurant: restaurant,
      };
      workers.forEach((el) => {
        const person = el.split(" ");
        const [worker, pay] = person;
        tempObj[worker] = Number(pay);
      });
      list.push(tempObj);
    });

    function avrgPay(obj) {
      // avrg pay FUNCTION
      let sum = 0;
      for (const key in obj) {
        if (key !== "restaurant") sum += Number(obj[key]);
      }
      const length = Object.keys(obj).length - 1;
      return (sum / length).toFixed(2);
    }

    function bestSalary(obj) {
      // best pay FUNCTION
      const arr = [];
      for (const key in obj) {
        if (key !== "restaurant") arr.push(Number(obj[key]));
      }
      arr.sort((a, b) => a + b);
      return arr[0].toFixed(2);
    }

    const sortedRest = list.sort((b, a) => avrgPay(a) - avrgPay(b)); // sorting restaurants by pay

    const bestName = sortedRest[0].restaurant;
    const avrgSalary = avrgPay(sortedRest[0]);

    document.getElementById(
      "bestRestaurant"
    ).textContent = `Name: ${bestName} Average Salary: ${avrgSalary} Best Salary: ${bestSalary(
      sortedRest[0]
    )}`;

    const rest = sortedRest[0];
    const restArray = Object.entries(rest);
    const sorted = restArray.sort((b, a) => a[1] - b[1]); //sorted workers with salaries

    let str = "";

    for (let i = 1; i < sorted.length; i++) {
      str += `Name: ${sorted[i][0]} With Salary: ${sorted[i][1]} `;
    }
    document.getElementById("workers").textContent = str;
  }
}
