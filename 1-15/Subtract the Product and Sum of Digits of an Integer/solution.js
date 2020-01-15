/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    var numString = String(n);
    
    var mul = 1, sum = 0;
    
    for(var i = 0; i < numString.length; i ++) {
        mul *= Number(numString[i]);
        sum += Number(numString[i]);
    }
        
    return mul - sum;
};