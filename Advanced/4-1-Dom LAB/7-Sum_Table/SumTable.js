function sumTable() {
    const list = document.querySelectorAll('table tr')
    let total = 0;
    for(let i = 1; i < list.length - 1;i++){    
        const row = list[i].children;
        const price = row[row.length-1].textContent;
        total+= Number(price)        
    }
    document.getElementById('sum').textContent = total
}