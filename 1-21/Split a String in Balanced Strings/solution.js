/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    var i, cnt = 0, balance = 0;
    
    for(i = 0; i < s.length; i ++) {
        if(s[i] == 'R')
            balance += 1;
        if(s[i] == 'L')
            balance -= 1;
        if(balance == 0) {
            cnt ++;
        }
    }
    
    return cnt;
};

/*
TEST CASE

"RLRRLLRLRL"
4

"RLLLLRRRLR"
3

"RLLRRRLLRLRLRRRLLL"
6
*/