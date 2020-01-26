/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    for(var i = 0; i < A.length; i ++)
        if(A[i] % 2 == 0) {
            var temp = A[i];
            A.splice(i, 1 );
            A.unshift(temp);
        }
    
    return A;
};

/*
TEST CASE
[3,1,2,4]
[4,2,3,1]

[5,3,1,2,4,6,3,1,2,4]
[4,2,6,4,2,5,3,1,3,1]
*/