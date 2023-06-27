function pascalCaseSplitter(input) {

    // const senetAray = input.split('');
    // let printArr = [];

    // for(let i of senetAray){
    //     const letter = i.toUpperCase();
    //     if(letter === i && senetAray.indexOf(i) === 0){
    //         printArr.push(i);
    //     }
    //     else if(letter === i && senetAray.indexOf(i) > 0){
    //         printArr.push(', ')
    //         printArr.push(i);
    //     }else{
    //         printArr.push(i);
    //     }
    // }
    // console.log(printArr.join(''));
    
    let result = input[0];

    for(let i  = 1; i < input.length; i++){
        const letter = input[i].toUpperCase();
        if(letter === input[i]){

            result += `, ${input[i]}`; 
        }else{
            result += input[i];
        }
    }
    console.log(result);
}pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')
pascalCaseSplitter('HoldTheDoor')
pascalCaseSplitter('ThisIsSoAnnoyingToDo')