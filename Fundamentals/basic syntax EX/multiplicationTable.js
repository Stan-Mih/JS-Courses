function multiplicationTable(num) {
    for(i = 1; i <= 10; i++){
        let calc = i * num
        console.log(`${num} X ${i} = ${calc}`);
    }
}multiplicationTable(5)