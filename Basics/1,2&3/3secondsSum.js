function secTotal(input) {
  let sec1 = Number(input[0]);
  let sec2 = Number(input[1]);
  let sec3 = Number(input[2]);

  let secSum = sec1 + sec2 + sec3;
  let mins = secSum / 60;
  let mins2 = Math.floor(mins);
  let secs = secSum % 60;

  if (secs >= 9) {
    console.log(`${mins2}:${secs}`);
  } else {
    console.log(`${mins2}:0${secs}`);
  }
}
secTotal(["50", "50", "49"]);
