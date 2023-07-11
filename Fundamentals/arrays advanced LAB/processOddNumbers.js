function processOddNumbers(input) {

    let filteredElements = input.filter((element, index) => index % 2 !== 0); /* втория параметър "index" отговаря за индекса и не може да се достъпи без да се подаде първия: "element".
    "filter" винаги получава два параметъра, първия : елеметна ,с който ще работи, втория е индекса */

    let doubledElemts = filteredElements.map(x => x * 2);

    let reversedElements = doubledElemts.reverse();

    

    console.log(reversedElements.join(" "));

}processOddNumbers([10, 15, 20, 25])
processOddNumbers([3, 0, 10, 4, 7, 3])