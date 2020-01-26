/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    for(var i = 0; i < A.length; i ++) {
        var inverted = [];
        
        for(var j = A[i].length - 1; j >= 0; j --)
            inverted.push(A[i][j]);
        
        for(j = 0; j < A[i].length; j ++)
            A[i][j] = ! inverted[j];
    }
    
    return A;
};

/*
TEST CASE

[[1,1,0],[1,0,1],[0,0,0]]
[[1,0,0],[0,1,0],[1,1,1]]

[[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
[[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]

*/