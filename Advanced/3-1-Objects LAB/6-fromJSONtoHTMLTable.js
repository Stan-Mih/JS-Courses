function fromJSONToHTMLTable(dataAsJson){

    const parsed = JSON.parse(dataAsJson);
    const result = [];

    result.push('<table>');
    const props = Object.keys(parsed[0]);
    result.push(`  <tr>${props.map(prop => `<th>${prop}</th>`).join('')}</tr>`);
    
    for (const el of parsed) {
        result.push(`  <tr>${props.map(prop => `<td>${el[prop]}</td>`).join('')}</tr>`);
    }       
    result.push('</table>');
    return result.join("\n")
}
// console.log(fromJSONToHTMLTable(
//     `[{"Name":"Stamat",
//         "Score":5.5},
//        {"Name":"Rumen",
//         "Score":6}]`
//     ));
console.log(fromJSONToHTMLTable(
    `[{"Name":"Pesho",
    "Score":4,
    " Grade":8},
   {"Name":"Gosho",
    "Score":5,
    " Grade":8},
   {"Name":"Angel",
    "Score":5.50,
    " Grade":10}]`
))