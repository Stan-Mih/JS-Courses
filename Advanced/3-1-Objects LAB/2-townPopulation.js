function townPopulation(arr) {
  const pop = {};

  arr.forEach((el) => {
    const splited = el.split(" <-> ");
    const name = splited[0];
    const popupation = splited[1];

    if (pop[name]) {
      pop[name] += Number(popupation);
    } else {
      pop[name] = Number(popupation);
    }
  });
  for(let key in pop){
    console.log(`${key} : ${pop[key]}`);
  }
 
}
townPopulation([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);
townPopulation([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);
