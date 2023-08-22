function townPopulation(arr) {
  const pop = {};

  arr.forEach((el) => {
    const splited = el.split(" <-> ");
    if (pop[splited[0]]) {
      pop[splited[0]] += Number(splited[1]);
    } else {
      pop[splited[0]] = Number(splited[1]);
    }
  });

  console.log(pop);
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
