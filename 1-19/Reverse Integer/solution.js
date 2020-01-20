/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var reverseStr;
    
    if(x == 0)
        return 0;
    
    while(x % 10 == 0)
        x /= 10;
    
    reverseStr = String(Math.abs(x)).split("").reverse().join("");
    
    if(Number(reverseStr) > Math.pow(2, 31) - 1)
        return 0;
    
    if(x < 0)
        return '-' + reverseStr;
    
    return reverseStr;
};

/*
TEST CASE
1534236469
0

123
321

-123
-321
*/