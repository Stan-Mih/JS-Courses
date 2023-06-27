function greening(input) {

    let calculation = 7.61 * Number(input[0])
    let discount = calculation * 0.18
    let finalPrice = calculation - discount

    console.log("The final price is: " + finalPrice + " lv.")
    console.log("The discount is: " + calculation * 0.18 + " lv.")
}
greening(["150"])