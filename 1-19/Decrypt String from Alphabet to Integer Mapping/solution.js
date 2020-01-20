/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    var i;
    var output = [];
    
    for(i = 0; i < s.length; ) {
        if(s[i + 2] == '#') {
            var char;
            
            char = Number(s[i]) * 10 + Number(s[i + 1]);
            char += 96;
            output += (String.fromCharCode(char));

            i += 3;
        }
        else {
            output += String.fromCharCode(Number(s[i]) + 96);
            i ++;
        }
    }
    
    return output;
};

/*
TEST CASE

"10#11#12"
"jkab"

"1326#"
"acz"
*/