function bookReading(input) {
  let pages = Number(input[0]);
  let hourRate = Number(input[1]);
  let daysAval = Number(input[2]);

  let hoursPerBook = pages / hourRate;
  let timeForReading = hoursPerBook / daysAval;

  console.log(timeForReading);
}
bookReading(["212", "20", "2"]);
