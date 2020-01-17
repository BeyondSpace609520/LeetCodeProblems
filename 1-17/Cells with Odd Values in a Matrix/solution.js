/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(n, m, indices) {
    var oddCnt = 0;
    var matrix = [];
    var i, j, k;
    
    for(j = 0; j < 50; j ++) {
        matrix[j] = new Array(m) 
        for(k = 0; k < m; k ++)
            matrix[j][k] = 0;
    }
    
    for(i = 0; i < indices.length; i ++) {
        var ri = indices[i][0];
        var ci = indices[i][1];
        
        for(j = 0; j < m; j ++)
            matrix[ri][j] ++;
        
        for(k = 0; k < n; k ++)
            matrix[k][ci] ++;
    }
    
    for(j = 0; j < n; j ++) {
        for(k = 0; k < m; k ++)
            if(matrix[j][k] % 2)
                oddCnt ++;
    }
    
    return oddCnt;
};

/*
TEST CASE
2
3
[[0,1],[1,1]]

6


3
4
[[1,0],[1,1], [0,2]]

7
*/