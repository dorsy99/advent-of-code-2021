var fs = require('fs');
var filename = "day2input.txt";

fs.readFile(filename, 'utf8', function(err, data){
    if (err) throw err;
    var dataInt = []; 
    data.split("\r\n").forEach(function(i){
        dataInt.push(i);
    });
    runIt2(dataInt);
    //part2(dataInt);
})

var runIt = function(data) {
    var depth = 0
    var hor = 0

    console.log(data)
    data.forEach(function(move){
        var dir = move.split(" ")[0];
        var dist = parseInt(move.split(" ")[1]);

        if (dir == "forward") {
            hor = hor + dist;
        }
        
        if (dir == "up") {
            depth = depth - dist;
        }

        if (dir == "down") {
            depth = depth + dist;
        }

    })
    console.log(depth + " " + hor)
}

var runIt2 = function(data){
    var depth = 0
    var hor = 0
    var aim = 0

    data.forEach(function(move){
        var dir = move.split(" ")[0];
        var dist = parseInt(move.split(" ")[1]);

        if (dir == "forward") {
            hor = hor + dist;
            depth = depth + (aim * dist);
        }
        
        if (dir == "up") {
            aim = aim - dist;
        }

        if (dir == "down") {
            aim = aim + dist;
        }

    })
    console.log(depth + " " + hor)
}