function vacation(people, type, day) {
  let stayPrice = 0;
  switch (type) {
    case "Students":
      if (day === "Friday") {
        stayPrice = people * 8.45;
      } else if (day === "Saturday") {
        stayPrice = people * 9.8;
      } else if (day === "Sunday") {
        stayPrice = people * 10.46;
      }
      if (people >= 30) {
        stayPrice -= stayPrice * 0.15;
      }
      break;
    case "Business":
      if (day === "Friday") {
        stayPrice = people * 10.9;
      } else if (day === "Saturday") {
        stayPrice = people * 15.6;
      } else if (day === "Sunday") {
        stayPrice = people * 16;
      }
      if (people >= 100) {
        let singlePerson = stayPrice / people;
        let person10Price = singlePerson * 10;
        stayPrice -= person10Price;
      }
      break;
    case "Regular":
      if (day === "Friday") {
        stayPrice = people * 15;
      } else if (day === "Saturday") {
        stayPrice = people * 20;
      } else if (day === "Sunday") {
        stayPrice = people * 22.5;
        if (people >= 10 && people <= 20) {
          stayPrice -= stayPrice * 0.05;
        }
      }
      break;
  }
  console.log(`Total price: ${stayPrice.toFixed(2)}`);
}
vacation(30, "Students", "Sunday");
