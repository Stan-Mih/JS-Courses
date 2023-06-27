function repainting(input) {

    let plastic = Number(input[0])
    let paint = Number(input[1])
    let thinner = Number(input[2])
    let hours = Number(input[3])

        let allPlastic = (plastic + 2) * 1.50
    
        let paintAdding = paint * 0.1
        let paintAdded = paintAdding + paint
        let allPaint = paintAdded * 14.50

        let allThinner = thinner * 5

        let allMaterials = allPlastic + allPaint + allThinner + 0.40

        let workersHourlyPay = allMaterials * 0.30

        
        let allHoursToPay = hours * workersHourlyPay

        let allSum = allMaterials + allHoursToPay
        


    console.log(allSum) 
}
repainting(['10','11','4','8'])