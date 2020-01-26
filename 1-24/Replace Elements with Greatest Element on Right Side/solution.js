/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    var i;
    var output = [];
    
    var maxToReplace = function(arr) {
        var max = arr[0];
        
        for(var i = 1; i < arr.length; i ++)
            if(max < arr[i])
                max = arr[i];
        
        return max;
    }
    
    for(i = 0; i < arr.length - 1; i ++) 
        output.push(maxToReplace(arr.slice(i + 1, arr.length)));
        
    output.push(-1);
    
    return output;
};

/*
TEST CASE

[17,18,5,4,6,1]
[18,6,6,6,1,-1]

[18,53,23,12,43,342,123]
[342,342,342,342,342,123,-1]

[138,53,23,432,433,3342,1123]
[3342,3342,3342,3342,3342,1123,-1]
*/