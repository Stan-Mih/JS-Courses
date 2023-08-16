function diagonalSums(matrix) {

    const matrixSize = matrix.length;
    let diag1 = 0;
    let diag2 = 0;

    for(let i = 0; i < matrixSize; i++) {
        diag1 += matrix[i][i];
    }
    for(let u = 0; u <matrixSize; u++){
        diag2 += matrix[u][matrixSize -1 -u]
    }
   console.log(diag1);
   console.log(diag2);
}
diagonalSums([[20, 40],
            [10, 60]]
   )    
diagonalSums([[3, 5, 17],
            [-1, 7, 14],
            [1, -8, 89]]
   )
diagonalSums([[3, 5, 17, 15 ,12],
            [-1, 7, 14, 18, 3],
            [1, -8, 89, 16, 4],
            [2, 15, 8 ,17 ,3],
            [15 ,20 ,3 ,8 ,4]]
   )