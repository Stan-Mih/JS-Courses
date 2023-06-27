function squareOfStars(param) {

let toPrint = "";
let count = 0;


if(param !== 5){


    for(let i = 1; i <= param; i++){
        toPrint +="* ";
        count++;

    }
    for(let i = 0; i < count;i ++){

        console.log(toPrint);
    }
}else{
    
}

}squareOfStars(1)
squareOfStars(2)
squareOfStars(7)
squareOfStars()