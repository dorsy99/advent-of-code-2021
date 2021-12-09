var fs = require('fs');
var filename = "day9input.txt";
//var filename = "day9test.txt";

fs.readFile(filename, 'utf8', function(err, data){
    if (err) throw err;
    
    var dataOut = [];
    data.split("\r\n").forEach(function(row){
        dataOut.push(row.split(""));
    })

    //console.log(dataOut);
    part1(dataOut);

})

var isLowest = function(x,y,data) {
    var point = data[y][x];
    var n,e,s,w;

    console.log("checking " + x + "," + y)

    if (y > 0) {
        n = data[y-1][x];
    } else {
        n = 10;
    }

    if (x < data[y].length-1) {
        e = data[y][x+1];
    } else {
        e = 10;
    }
    
    if (y < data.length-1) {
        s = data[y+1][x];
    } else {
        s = 10;
    }

    if (x > 0) {
        var w = data[y][x-1];
    } else {
        w = 10;
    }

    //console.log(n + e + s + w);
    return (point < n && point < e && point < s && point < w)


}


var part1 = function(data) {
//    var x = 1;
//    var y = 2;

    var totalRisk = 0;

    data.forEach(function(row, y){
        row.forEach(function(col, x){
            if (isLowest(x,y,data)) {
                console.log("Found low point: " + col + " at coords: " + x + "," + y);
                totalRisk = totalRisk + parseInt(col) + 1
            }
        })
    })

    //console.log(isLowest(x, y, data));
    console.log("Risk: " + totalRisk)
}