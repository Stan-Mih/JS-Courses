function towns(input) {
    const arr = [];    

    for(let i = 0; i < input.length; i++){        
        const row = input[i].slice(2).slice(0,-2).split(" | ");
        if(i === 0) info = row;
        else{
            const town = row[0];
            const lat = (Number(row[1])).toFixed(2);
            const long = (Number(row[2]).toFixed(2));
            const tempObj = {
            Town : town,
            Latitude : Number(lat),
            Longitude : Number(long),
            };  
            arr.push(tempObj);              
        }  
       
    }
    const print = JSON.stringify(arr);
    console.table(print);
   
}
towns(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']
)
towns(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
)