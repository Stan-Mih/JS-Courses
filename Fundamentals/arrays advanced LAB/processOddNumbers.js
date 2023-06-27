function processOddNumbers(input) {

    let filteredElements = input.filter((el, i) => i % 2 !== 0); /* втория елемент "i" отговаря за индекса и не може да се достъпи без първия елемет "el"
    "filter" винаго получава два параметъра, първия : елеметна ,с който ще работи, втория е индекса */

    let doubledElemts = filteredElements.map(x => x * 2);

    let reversedElements = doubledElemts.reverse();

    

    console.log(reversedElements.join(" "));

}processOddNumbers([10, 15, 20, 25])
processOddNumbers([3, 0, 10, 4, 7, 3])