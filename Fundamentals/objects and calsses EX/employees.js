function employees(arr) {

    class Employee {
        constructor(name, num) {
            this.name = name;
            this.num = num;
        }
        print(){
            console.log(`Name: ${this.name} -- Personal Number: ${this.num}`);
        }
    }
    for(let i of arr){
        let currNameLen = i.length;
        let currentEmployee = new Employee(i, currNameLen)
        currentEmployee.print();
    }

}employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )
employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]
    )