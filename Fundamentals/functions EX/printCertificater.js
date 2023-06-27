function printCertificate(grade, name){  

    printHeader();
    printName(name);
    formatGrade(grade)
       
    function printName(nameArr) {
        console.log(nameArr[0] + ' ' + nameArr[1]);
      } 

    function printHeader() {
        console.log('~~~-   {@}   -~~~');
        console.log('~- Certificate -~');
        console.log('~~~-  ~---~  -~~~');
      }
       
    function formatGrade (grade) {
    let desc;
    let formatedGrade = grade.toFixed(2);
       
        if(grade < 3){
           desc = "Fail";
           formatedGrade = 2
        }else if(grade < 3.50){
           desc = "Poor";
        }else if(grade < 4.50){
           desc = good;
        }else if(grade < 5.50){
           desc = "Very good";
        }else if(grade <= 6){
           desc = "Excellent"
        }
        console.log(`${desc} (${grade})`);
    }
}printCertificate(5.25, ['Peter', 'Carter']);

