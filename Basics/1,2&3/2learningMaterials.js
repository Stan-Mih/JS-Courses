function supp(input) {

       let pens = Number(input[0]) 
       let markers = Number(input[1])
       let detergent = Number(input[2])
       let discount = Number(input[3])

       let pnesPrice = pens * 5.80
       let markersPrice = markers * 7.20
       let detergentPrice = detergent * 1.20

       let sumWithoutDiss = pnesPrice + markersPrice + detergentPrice
       let sumWithDiss = sumWithoutDiss * 0.25

       let finalSum = sumWithoutDiss - sumWithDiss

       console.log(finalSum)
}
supp(['2','3','4','25'])