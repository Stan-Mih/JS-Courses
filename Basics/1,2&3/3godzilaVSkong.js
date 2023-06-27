function moovieShooting (input){

    let movieBudjet = Number(input[0])
    let extras = Number(input[1])
    let cloathing = extras * Number(input[2])

    let decor = movieBudjet * 0.10
  
    if(extras > 150) {
        cloathing = cloathing * 0.90
    }
    let totalMoney = cloathing + decor
    let moneyLeft = Math.abs(movieBudjet - totalMoney)
     moneyLeft = moneyLeft.toFixed(2)
    if (movieBudjet < totalMoney){
        console.log(`Not enough money!`)
        console.log(`Wingard needs ${moneyLeft} leva more.`)
    }else if (movieBudjet >= totalMoney){
        console.log(`Action!`)
        console.log(`Wingard starts filming with ${moneyLeft} leva left.`)
    }
}   
moovieShooting(["200",
"120",
"55.5"])




