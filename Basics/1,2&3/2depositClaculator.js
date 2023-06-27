function depositCalucator(input) {
  let intrestAll = Number(input[0]);
  let depositLenght = Number(input[1]);
  let Intrest = Number(input[2]);

  let YearRateIntrest = (intrestAll * Intrest) / 100;
  let montlyRate = YearRateIntrest / 12;
  let periodIntrest = montlyRate * depositLenght;

  let finalSum = intrestAll + periodIntrest;

  console.log(finalSum);
}
depositCalucator(["200", "3", "5.7"]);
