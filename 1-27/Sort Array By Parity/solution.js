/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var isSelfNumber = function(num) {
    var str = num.toString();
    
    for(var i = 0; i < str.length; i ++) {
        if(num % Number(str.charAt(i)) != 0)
            return false;
    }
    
    return true;
}
var selfDividingNumbers = function(left, right) {
    var output = [];
    
    for(var i = left; i <= right; i ++) {
        if(isSelfNumber(i))
            output.push(i);    
    }    
    
    return output;
};

/*
TEST CASE

1
22
[1,2,3,4,5,6,7,8,9,11,12,15,22]

234
267
[244,248,264]
*/