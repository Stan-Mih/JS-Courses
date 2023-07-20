function solve(input) {

    class Employee {
        constructor(firstName, surrname, num) {
            this.firstName = firstName;
            this.surrname = surrname;
            this.num = num;
        }
        print(){
            console.log(`Name${this.firstName} ${this.surrname} -- ${this.num}`);
        }
    }
    for (const person of input) {
        const num = person.length;
        const[firstName,surrname] = person.split(" ")
        let employee = new Employee(firstName, surrname, num);
        employee.print()
    }





    // let employees = [];

    // for (const personNames of input) {
    //     const number = personNames.length;
    //     const [firstName, surrname] = personNames.split(" ");
    //     const person = new Employee(firstName, surrname, number);
    //     employees.push(person);
    // }
    // for (const employee of employees) {
    //     console.log(`Name: ${employee.firstName} ${employee.surrname} -- Personal Number: ${employee.num}`);
    // }
}
solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )
solve([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]
    )