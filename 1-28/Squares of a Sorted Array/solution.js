/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    var i;
    
    for(i = 0; i < A.length; i ++)
        A[i] = A[i] * A[i];
    
    for(i = 0; i < A.length; i ++) {
        for(var j = i +1; j < A.length; j ++) {
            var temp;
            
            if(A[i] > A[j]) {
                temp = A[i];
                A[i] = A[j];
                A[j] = temp;
            }
        }
    }
    
    return A;
};