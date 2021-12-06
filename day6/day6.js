var fs = require('fs');
//var filename = "day3input.txt";
var filename = "day6input.txt";

fs.readFile(filename, 'utf8', function(err, data){
    if (err) throw err;
    var dataInt = []; 
    dataInt = data.split(",");
    
    //part1(dataInt);
    //part1([3,4,3,1,2])
    part2("3,4,3,1,2");
})

var part1 = function(data) {
    //onsole.log(data)
    var numDays = 80;

    for (var i = 0; i < numDays; i++) {
        data.forEach(function(e, index){
            if (data[index] == 0) {
                data[index] = 6
                data.push(8);
            } else {
                data[index] = data[index] - 1
            }
        })

    }

    console.log(data.length);

}

var part2 = function(data) {
    var numDays = 80;
    var dataStripped = data.replace(/,/g, "");

    console.log(dataStripped);

    for (var i = 0; i < numDays; i++) {
        for (var j = 0; j < dataStripped.length; j++) {
            //console.log(dataStripped.charAt(j))
            //hahaha not this way :(
        }
        //var len = dataStripped.length
        
    }
}