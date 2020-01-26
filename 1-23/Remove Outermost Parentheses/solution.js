/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    var leftCnt = 0 
    var rightCnt = 0 
    var st = 0
    var output = ''
    
    for (var i = 0; i < S.length; i++){
        if(S[i] === '(')
            leftCnt ++;
        
        if(S[i] === ')')
            rightCnt ++;
        
        if (leftCnt == rightCnt){
            leftCnt = 0;
            rightCnt = 0;
            output += S.substring(st + 1, i)
            st = i + 1;
        }
    }
    
    return output
};

/*
TEST CASE

"(()())(())"
"()()()"

"(()())(())(()(()))"
"()()()()(())"

"()()"
""
*/