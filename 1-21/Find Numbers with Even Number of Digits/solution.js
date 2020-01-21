/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    var i, j, cnt = 0;
    
    for(i = 0; i < nums.length; i ++){
        var cur = String(nums[i]);
        
        if(cur.length % 2 == 0)
            cnt ++;
    }
    
    return cnt;
};