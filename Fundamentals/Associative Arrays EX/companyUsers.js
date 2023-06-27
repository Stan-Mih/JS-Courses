function companyUsers(arr) {

    let dataBase = {};

    for(let i of arr){
        let [company, id] = i.split(" -> ");
        
        if(!dataBase[company]){
            dataBase[company] = [];
        }
        dataBase[company].push(id);   
        }
        
    let toEntries = Object.entries(dataBase);
    let soreted = toEntries.sort((a,b) => a[0].localeCompare(b[0]));

    console.table(soreted);

    for(const key in soreted){
        console.log(key[0]);
        for(let i of soreted[key]){
            console.log(`-- ${key}`);
        }
    }

}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
    )
// companyUsers([
//     'SoftUni -> AA12345',
//     'SoftUni -> CC12344',
//     'Lenovo -> XX23456',
//     'SoftUni -> AA12345',
//     'Movement -> DD11111'
//     ]
//     )