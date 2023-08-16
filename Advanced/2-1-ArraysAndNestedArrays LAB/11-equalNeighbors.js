function equalNeighbors(mat) {
    const matL = mat.length;
    let matches = 0;

    for(let i = 0; i < matL; i++){
        const rowL = (mat[i].length);
        for(let u = 0; u < rowL; u++){
            const curr = mat[i][u];
            const before = mat[i][u -1];
            const after = mat[i][u +1];
            const upperRow = mat[i - 1][u];
            const lowerRow = mat[i + 1][u];
            if(curr === before || curr === after || curr === upperRow || curr === lowerRow){
                matches++;
                mat[i][u] = null;
            }
        }
    }
    console.log(matches);
}
equalNeighbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
)
equalNeighbors([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
)
