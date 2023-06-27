function phoneBook(arr) {

    let phoneBook = {};

    for(let i of arr){
        let [name, number] = i.split(' ');
        phoneBook[name] = number;
    }
    for(let u in phoneBook){
        console.log(`${u} -> ${phoneBook[u]}`);
    }
}phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)
phoneBook(['George 0552554',
'Peter 087587',
'George 0453112',
'Bill 0845344']
)