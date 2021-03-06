var fs = require('fs');
var filename = "day7input.txt";

fs.readFile(filename, 'utf8', function(err, data){
    if (err) throw err;
    var dataInt = []; 
    dataInt = data.split(",");
    
    //part1(dataInt);
    //part1([16,1,2,0,4,2,7,1,2,14])
    part2(dataInt);
    //part2([16,1,2,0,4,2,7,1,2,14])
})


var getMedian = function(numbers) {
    var working = [];

    for (i = 0; i < numbers.length; i++) {
        working[i] = parseInt(numbers[i]);
    }


    working.sort(function(a,b){
        return a-b;
    })
    
    var half = Math.floor(working.length / 2);
    if (working.length % 2) {
        return working[half]
    } else {
        return (working[half - 1] + working[half]) / 2
    }
}

var getMean = function(data) {
    var total = 0;
    data.forEach(function(e){
        total = total + parseInt(e);
    })
    return total/data.length;
}

var useFuel = function(from, to) {
    var totalFuel = 0;
    for (var i = 0; i <= Math.abs(to-from); i++){
        totalFuel = totalFuel + i;
    }
    return totalFuel;
}

var part1 = function(data) {
    var median = getMedian(data);
    var fuelUsed = 0;

    data.forEach(function(e){
        fuelUsed = fuelUsed + Math.abs(median - e);
    })

    console.log(fuelUsed);
}

var part2 = function(data) {
    
    /* Silly andrew, brute force is for chumps
    data.sort(function(a,b){
        return a-b;
    })

    var max = data[data.length-1]
    var minFuel = 0;
    var fuelThisRun = 0;

    for (var i = 0; i < max; i++) {
        data.forEach(function(e){
            fuelThisRun = fuelThisRun + useFuel(i, e);
        })

        if (minFuel == 0) {
            minFuel = fuelThisRun;
        } else if (minFuel > fuelThisRun) {
            minFuel = fuelThisRun;
        }

        fuelThisRun = 0;
    }

    console.log(minFuel)

    */
    

    var total = 0;
    var mean = (Math.round(getMean(data)) -1);

    data.forEach(function(e){
        total = total + useFuel(mean, e);
    })

    console.log(total)
    
}