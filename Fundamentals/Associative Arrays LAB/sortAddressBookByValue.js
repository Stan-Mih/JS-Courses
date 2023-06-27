function addressBook(arr) {

    let book = {};

    arr.forEach(entry => {
        let [name, address] = entry.split(":");
        book[name] = address;
    });

    let toEntry = Object.entries(book);

    toEntry.sort((a,b) => a[1].localeCompare(b[1]));

    for(let i of toEntry){
        console.log(`${i[0]} -> ${i[1]} `);
    }

}addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])
addressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd'])