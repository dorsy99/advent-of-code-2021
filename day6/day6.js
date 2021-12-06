var fs = require('fs');
//var filename = "day3input.txt";
var filename = "day6input.txt";

fs.readFile(filename, 'utf8', function(err, data){
    if (err) throw err;
    var dataInt = []; 
    dataInt = data.split(",");
    
    //part1(dataInt);
    //part1([3,4,3,1,2])
    part2(dataInt);
    //part2([3,4,3,1,2])
})

var part1 = function(data) {
    //console.log(data)
    var numDays = 256;

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
    var numDays = 256;

    var nums = {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0
    }
    data.forEach(function(e){
        nums[e] = nums[e] + 1
    })
    
    var new8s = 0;

    for (var i = 0; i < numDays; i++) {
        new8s = nums[0];
        
        nums[0] = nums[1]
        nums[1] = nums[2]
        nums[2] = nums[3]
        nums[3] = nums[4]
        nums[4] = nums[5]
        nums[5] = nums[6]
        nums[6] = nums[7] + new8s
        nums[7] = nums[8]
        nums[8] = new8s

        new8s = 0
        //console.log(nums)
        
    }
    console.log(nums)
    
    var total = nums[0] + nums[1] + nums[2] + nums[3] + nums[4] + nums[5] + nums[6] + nums[7] + nums[8] 

    console.log("Total: " + total)
    //console.log(nums)


}