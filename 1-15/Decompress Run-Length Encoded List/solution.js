/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    var length = nums.length;
    var i, j, result = [];
    
    for(i = 0; i < length; i += 2) {
        var freq = nums[i];
        var val = nums[i + 1]
        
        for(j = 0; j < freq; j ++)
            result.push(val)
    }
    
    return result;
};