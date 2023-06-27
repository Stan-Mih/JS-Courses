function salary (input){
    let nTabs = Number(input[0]);
    let salary = Number(input[1]);
    let index = 2;
    let salaryLeft = true;

    for(i = 1; i <= nTabs; i++){
        let nameOfTabs = input[index];
        index++;
        switch(nameOfTabs){
            case "Facebook" : salary -= 150; break;
            case "Instagram" : salary -= 100; break;
            case "Reddit" : salary -= 50; break;
            default : 
        }if(salary <= 0){ salaryLeft = false
            console.log('You have lost your salary.'); break;
    }

    
    }if(salaryLeft === true){
        console.log(salary)}
    
}salary(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])








