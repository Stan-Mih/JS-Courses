function addressBook(arr) {

    let book = {};

    arr.forEach(person => {
        let [name, address] = person.split(":");
        book[name] = address;
    });
    
    let addressBookEntries = Object.entries(book);

    addressBookEntries.sort((a,b) => a[0].localeCompare(b[0]));
    
    for(let i of addressBookEntries){
        console.log(`${i[0]} -> ${i[1]}`);
    }
    
    
}addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)
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
'Jeff:Huxley Rd']
)