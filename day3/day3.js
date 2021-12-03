var fs = require('fs');
//var filename = "day3input.txt";
var filename = "day3testinput.txt";

fs.readFile(filename, 'utf8', function(err, data){
    if (err) throw err;
    var dataInt = []; 
    data.split("\r\n").forEach(function(i){
        dataInt.push(i);
    });
    //runIt(dataInt);
    part2(dataInt);
})

var runIt = function(data){
    //console.log(data);
    var len = data[0].length;
    var output = "";

    for (i = 0; i < len; i++) {
        var current = 0
        data.forEach(function(item){
            current = current + parseInt(item[i])
        })

        if (current > (data.length/2)) {
            output = output + "1"
        } else {
            output = output + "0"
        }
        //console.log(current + " " + data.length)
        
    }
    //console.log(output);
    //console.log(parseInt(output, 2));
    //console.log("000011000000")
    //console.log(parseInt("000011000000", 2));

    return({
        "most":output,
        "least": swapBin(output)
    })

    //manual because swapping is sad :(
}

var swapBin = function(binary) {
    var output = ""
    binary.split("").forEach(function(c){
        if (c == "0"){
            output = output + "1";
        } else {
            output = output + "0";
        }
    })
    return output;
}

var part2 = function(data){
    input = runIt(data)
    var valid = data
    //console.log(input)
    for (var i = 0; i < data[0].length; i++) {
        //console.log("VALID LENGTH: " + valid.length)
        data.forEach(function(d, index){
            console.log("Checking " + d + " for a " + input.least[i] + "at index " + i)
            if (d[i] != input.least[i]) {
                console.log("didn't find - removing " + d)
                valid.splice(index, 1);
            }
        })
    }
    console.log(valid)
}