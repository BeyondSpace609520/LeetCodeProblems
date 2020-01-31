/**
 * @param {string} moves
 * @return {boolean}
 */
const movePos = {
    "R": [1, 0],
    "L": [-1, 0],
    "U": [0, 1],
    "D": [0, -1]
}
var judgeCircle = function(moves) {
    var st = [0, 0];
    for(var i = 0; i < moves.length; i ++) {
        st[0] += movePos[moves[i]][0];
        st[1] += movePos[moves[i]][1];
    }
    
    if(st[0] == 0 && st[1] == 0)
        return true;
    
    return false;
};

/*
TEST CASE

"UD"
true

"DURLLRDU"
true
*/