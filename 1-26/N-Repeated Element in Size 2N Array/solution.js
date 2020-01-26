/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    var getFreq = function(num, arr) {
        var cnt = 0;
        
        for(var i = 0; i < arr.length; i ++)
            if(arr[i] == num)
                cnt ++;
        
        return cnt;
    }
    
    for(var i = 0; i < A.length; i ++) {
        if(getFreq(A[i], A) == A.length / 2)
            return A[i];
    }
};