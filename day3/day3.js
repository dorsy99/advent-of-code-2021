var fs = require('fs');
//var filename = "day3input.txt";
var filename = "day3testinput.txt";

fs.readFile(filename, 'utf8', function(err, data){
    if (err) throw err;
    var dataInt = []; 
    data.split("\n").forEach(function(i){
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

        if (current >= (data.length/2)) {
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

var filterArray = function(array, firstChar) {

    var outArray = []
    array.forEach(function(el, i){
        console.log("Does " + el + " start with " + firstChar)
        if (el[0] == firstChar) {
            //array.splice(1, i)
            outArray.push(el)
        }
    })
    return outArray
}

var part2 = function(data){
    input = runIt(data)
    var o2gen = [...data]
    var scrubber = [...data]

    o2gen = filterArray(o2gen, input.most[0]);
    scrubber = filterArray(scrubber, input.least[0])

    console.log(o2gen);
    console.log(scrubber);


    //console.log(input)
    //console.log(data)


    var newCommon = runIt(o2gen);
    console.log(newCommon)
    
    for (var i = 1; i < o2gen.length; i++) {
        //console.log("VALID LENGTH: " + valid.length)
        o2gen.forEach(function(d, index) {
            if (index > 1) {
            console.log("Checking " + d + " for a " + newCommon.most[i] + " at index " + i)
            if (d[i] != newCommon.most[i]) {
                console.log("didn't find - removing " + d)
                o2gen.splice(index, 1);
            }
            }
        })
    }
    console.log(o2gen)
    
}