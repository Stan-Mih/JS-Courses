function projects(input) {
    let name = input[0];
    
    let Project = Number(input[1]);
    let hours = Project * 3 ;

    console.log(`The architect ${name} will need ${hours} hours to complete ${input[1]} project/s.`);
}
projects(["Ivan","5"]);