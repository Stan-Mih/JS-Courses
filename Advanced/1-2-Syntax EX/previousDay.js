function previousDay(year, month, day) {

    const date = new Date(year, month, day-1);
    const newYear = date.getFullYear();
    const newMonth = date.getMonth();
    const newDay = date.getDate();


    console.log(`${newYear}-${newMonth}-${newDay}`);
}
previousDay(2016, 9, 1)
previousDay(2015, 5, 10)