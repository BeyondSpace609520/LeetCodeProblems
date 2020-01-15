/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    var cnt = 0;
    
    for(var i = 0; i < S.length; i ++)
        for(var j = 0; j < J.length; j ++) 
            if(S[i] == J[j]) 
                cnt ++; 

    return cnt;
};