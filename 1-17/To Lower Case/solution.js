/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    var lowerString = [];
    
    for(var i = 0; i < str.length; i ++) {
        var charCode = str.charCodeAt(i);
        
        
        if(charCode >= 65 && charCode < 92) 
            charCode += 32;
        
        lowerString += String.fromCharCode(charCode);
    }
        
    return lowerString;
};

/*
TEST CASE
"Aello"
"aello"

"LOVELY"
"lovely"
*/