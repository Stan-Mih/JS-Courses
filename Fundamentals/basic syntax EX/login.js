function login(input) {
  let index = 0;
  let user = input[index];
  index++;
  let incorretcTryes = 0;

  for (i = index; i > 0; i++) {
    let pass = input[index];
    index++;
    let reversedPass = "";

    for (u = pass.length; u > -1; u--) {
      reversedPass += pass.charAt(u);
    }
    if (reversedPass === user) {
      console.log(`User ${user} logged in.`);
      break;
    } else if (reversedPass !== user && incorretcTryes === 3) {
      console.log(`User ${user} blocked!`);
      break;
    } else if (reversedPass !== user) {
      console.log(`Incorrect password. Try again.`);
      incorretcTryes++;
    }
  }
}
login(["sunny", "h", "cl", "s", "k"]);
