function division(num) {
  // let localNum = 0;
  // let notDivisible = true;
  // if (num % 2 === 0) {
  //   localNum = 2;
  // }
  // if (num % 3 === 0) {
  //   localNum = 3;
  // }
  // if (num % 6 === 0) {
  //   localNum = 6;
  // }
  // if (num % 7 === 0) {
  //   localNum = 7;
  // }
  // if (num % 10 === 0) {
  //   localNum = 10;
  // }
  // if (localNum === 0) {
  //   console.log("Not divisible");
  //   notDivisible = false;
  // }
  // if (notDivisible) {
  //   console.log(`The number is divisible by ${localNum}`);
  // }

  if(num % 10 === 0){
    console.log(`The number is divisible by 10`);
  }else if(num % 7 === 0){
    console.log('The number is divisible by 7');
  }else if(num % 6 === 0){
    console.log('The number is divisible by 6');
  }else if(num % 3 === 0){
    console.log('The number is divisible by 3');
  }else if(num % 2 === 0){
    console.log('The number is divisible by 2');
  }else{
    console.log('Not divisible');
  }

  }

division(30);
division(12);
division(15);
division(1643);
