/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    var result = 0;
    for (var i = 0; i < points.length - 1; i++) {
        result += Math.max(
            Math.abs(points[i][0] - points[i+1][0]), 
            Math.abs(points[i][1] - points[i+1][1])
        )
    }
    
    return result   
};

/*
TEST CASE
[[1,1],[3,4],[-1,0]]
7

[[3,2],[-2,2]]
5
*/