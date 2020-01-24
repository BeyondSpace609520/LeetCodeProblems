/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    var output = [];
    var i;
    
    if(n % 2) 
        output.push(0);
    
    for(i = 1; i <= n / 2; i ++)
        output.push(-i, i);
    
    return output;
};

/*
TEST CASE
5
[0,-1,1,-2,2]

10
[-1,1,-2,2,-3,3,-4,4,-5,5]
*/