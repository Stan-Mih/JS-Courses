function  magicMatrices(mx) {

    const mxL = mx.length;
    const rowSums = [];
    const colSums = [];
    let isEven = false;   

    for(let i = 0; i < mxL; i++){
        const row = mx[i];
        const rowSum = row.reduce((acc, cur) => acc + cur);
        rowSums.push(rowSum);
    }    
    for(let i = 0; i < mxL; i++){
        let tempSum = 0;       
        for(let u = 0; u < mxL; u++){
            tempSum += mx[u][i];
        }
        colSums.push(tempSum);
        tempSum = 0;
    }
    rowSums.map(el => {
        if(el === rowSums[0]){
            isEven =  true;
        }else{isEven =  false}
    }) 
    colSums.map(el => {
        if(el === colSums[0]){
            isEven =  true;
        }else{isEven =  false}
    })
    console.log(isEven); 
}



magicMatrices([[4, 5, 6],
                [6, 5, 4],
                [5, 5, 5]])

magicMatrices([[11, 32, 45],
              [21, 0, 1],
              [21, 1, 1]]
)
magicMatrices([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]
)