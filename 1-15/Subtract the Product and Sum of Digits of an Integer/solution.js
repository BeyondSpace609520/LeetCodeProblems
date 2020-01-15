/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    var numString = String(n).split("");
    
    var sum = (accumulator, currentValue) => Number(accumulator) + Number(currentValue);
    var mul = (accumulator, currentValue) => Number(accumulator) * Number(currentValue);
    
    return numString.reduce(mul) - numString.reduce(sum);
};