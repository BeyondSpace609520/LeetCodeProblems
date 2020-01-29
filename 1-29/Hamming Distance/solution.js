/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var xBin = x.toString(2).split("");
    var yBin = y.toString(2).split("");
    var distance = 0;
    
    while(xBin.length < yBin.length){
        xBin.unshift("0");
    }
    while(xBin.length > yBin.length){
        yBin.unshift("0");
    }
    
    xBin.forEach((x,i)=>{
        if(x !== yBin[i])
            distance ++;
    })
    return distance;
};

/*
TEST CASE
1 4
2

13
44
2
*/