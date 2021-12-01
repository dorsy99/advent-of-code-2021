var fs = require('fs');
var filename = "day1input.txt";

fs.readFile(filename, 'utf8', function(err, data){
    if (err) throw err;
    var dataInt = []; 
    data.split("\n").forEach(function(i){
        dataInt.push(parseInt(i));
    });
    runIt(dataInt);
    //part2(dataInt);
})

var runIt = function(data) {
    console.log("Part 1: " + part1(data));
    console.log("Part 2: " + part2(data));
}

var part1 = function(data) {
    //console.log(data)
    var gt = 0;

    for (var i = 0; i < data.length; i++) {
        //console.log("Comparing: " + data[i] + " to " + data[i-1])
        if (i > 0) {
            if (data[i] > data[i-1]) {
                gt++;
            }
        }
    }
    return(gt)
}

var part2 = function(data) {
    var sums = [];
    for (var i = 2; i < data.length; i++) {
        sums.push(data[i-2]+data[i-1]+data[i]);
    }
    return part1(sums)
}