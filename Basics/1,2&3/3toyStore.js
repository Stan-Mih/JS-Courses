function ToyVacaition(input) {
  let vacationPrice = Number(input[0]);
  let puzzel = Number(input[1]);
  let doll = Number(input[2]);
  let teddy = Number(input[3]);
  let minion = Number(input[4]);
  let truck = Number(input[5]);

  let puzzelPrice = puzzel * 2.6;
  let dollPrice = doll * 3;
  let teddyPrice = teddy * 4.1;
  let minionPrice = minion * 8.2;
  let truckPrice = truck * 2;

  let sumOfToys = puzzel + doll + teddy + minion + truck;
  let sumOfToysPrice =
    puzzelPrice + dollPrice + teddyPrice + minionPrice + truckPrice;

  if (sumOfToys >= 50) {
    sumOfToysPrice = sumOfToysPrice * 0.75;
  }
  let leftAfterRent = sumOfToysPrice * 0.9;

  let diff = Math.abs(leftAfterRent - vacationPrice);
  diff = diff.toFixed(2);

  if (leftAfterRent >= vacationPrice) {
    console.log(`Yes! ${diff} lv left.`);
  } else {
    console.log(`Not enough money! ${diff} lv needed.`);
  }
}
ToyVacaition(["40.8", "20", "25", "30", "50", "10"]);
