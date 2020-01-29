/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    var freq = {};
   
    for(val of arr)
        freq[val] = (freq[val] || 0) + 1;
    
    return Object.keys(freq).length === new Set(Object.values(freq)).size;
};