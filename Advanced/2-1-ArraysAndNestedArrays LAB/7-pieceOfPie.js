function pieceOfPie(arr, start, end) {

    const startIndex = arr.indexOf(start);
    const endIndex = arr.indexOf(end);
    const newArr = arr.splice(startIndex,endIndex);

    return newArr;

}pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
)
pieceOfPie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
)
