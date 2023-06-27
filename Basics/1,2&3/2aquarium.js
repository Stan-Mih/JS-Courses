function capacity(data) {
  let capacitySm2 = Number(data[0]) * Number(data[1]) * Number(data[2]);
  let capacityLt = capacitySm2 / 1000;
  let percent = Number(data[3]) / 100;
  let waterCapacyty = capacityLt * percent;
  let finalCapacity = capacityLt - waterCapacyty; // test

  console.log(finalCapacity);
}

capacity(["85 ", "75 ", "47 ", "17 "]);
