var fs = require('fs');
var filename = "day8input.txt";

fs.readFile(filename, 'utf8', function(err, data){
    if (err) throw err;
    
    var dataOut = [];
    data.split("\n").forEach(function(row){
        var item = {}
        item.training = row.split(" | ")[0].split(" ");
        item.outputs = row.split(" | ")[1].split(" ");
        dataOut.push(item);
    }) 
    
    
    part1(dataOut);
    //part2(dataInt);
})

var part1 = function(data) {
    //console.log(data)

    var total = 0
    var acceptableLengths = [2,3,4,7]

    data.forEach(function(e){
        //console.log("checking:" + e)
        e.outputs.forEach(function(o){
            //console.log("is " + o + " in the array?")
            if (acceptableLengths.indexOf(o.length) != -1) {
                total++
            }
        })
    })

    console.log(total);
}

var part2 = function(data) {

    //1 is 2 long
    // 4 is 4 long
    // 7 is 3 long
    // 8 is 7 long
    // 9 is 6 long and contains all of 4
    // 6 is 6 long and does not contain all of 1
    // 0 is 6 long and not 9 or 6
    // 3 is 5 long and contains all of 1
    // 5 is 5 long and contained in 9
    // 2 is the odd one out

    data.forEach(function(e){
        var top, tl, tr, mid, ll, lr, bottom;

    })
    


}