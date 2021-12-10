var fs = require('fs');
var filename = "day8input.txt";
//var filename = "day8test.txt";

fs.readFile(filename, 'utf8', function(err, data){
    if (err) throw err;
    
    var dataOut = [];
    data.split("\r\n").forEach(function(row){
        var item = {}
        item.training = row.split(" | ")[0].split(" ");
        item.outputs = row.split(" | ")[1].split(" ");
        dataOut.push(item);
    }) 
    
    
    //part1(dataOut);
    part2(dataOut);
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

var containsAll = function(input, checkAgainst) {
    //var inputAr = input.split("");
    //var checkAr = checkAgainst.split("");

    var output = true;
    input.split("").forEach(function(letter){
        if (checkAgainst.indexOf(letter) == -1) {
            output = false;
        }
    })
    return output;
    
/*
    inputAr.sort(function (a, b) {
        return (a).localeCompare(b);
    })

    var inputstr = inputAr.join("");

    console.log(inputstr);

    checkAr.sort(function (a, b) {
        return (a).localeCompare(b);
    })

    var checkstr = checkAr.join("");

    console.log(checkstr)

    return(checkstr.indexOf(inputstr) != -1)
*/

}

var alph = function(input) {
    return [...input].sort((a, b) => a.localeCompare(b)).join("");
}

console.log(containsAll("ab","ecbad"))

var part2 = function(data) {

    var totalReturn = 0;

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

        var zero, 
        one, 
        two, 
        three, 
        four, 
        five, 
        six, 
        seven,
        eight, 
        nine;

        //console.log(e)

        var i = 0;
        while (i < 10) {
            e.training.forEach(function(input){
                
                if (input.length == 2 && one == null) {
                    one = input;
                    i++
                    //console.log("found one: " + one);
                }

                if (input.length == 4 && four == null) {
                    four = input;
                    i++
                    //console.log("found four: " + four);
                }

                if (input.length == 3 && seven == null) {
                    seven = input;
                    i++
                    //console.log("found seven: " + seven);
                }

                if (input.length == 7 && eight == null) {
                    eight = input;
                    i++
                    //console.log("found eight: " + eight)
                }

                // 9 is 6 long and contains all of 4
                if (four != null && nine == null && input.length == 6 && containsAll(four, input)) {
                    //console.log("checking " + input)
                    nine = input;
                    i++
                    //console.log("found nine: " + nine)
                }

                // 6 is 6 long and does not contain all of 1
                if (one != null && input.length == 6 && !(containsAll(one, input)) && six == null) {
                    //console.log("checking " + input)
                    six = input;
                    i++
                    //console.log("found six: " + six)
                }

                // 0 is 6 long and not 9 or 6
                if (input.length == 6 && zero == null && nine != null && six != null) {
                    if (input != nine && input != six) {
                        zero = input;
                        i++
                        //console.log("found zero: " + zero);
                    }
                }

                // 3 is 5 long and contains all of 1
                if (input.length == 5 && three == null && one != null && nine != null  && containsAll(one, input)) {
                    three = input;
                    i++
                    //console.log("found three: " + three)
                }

                // 5 is 5 long and contained in 9
                if (input.length == 5 && five == null && three != null && nine != null && containsAll(input, nine) && !containsAll(one, input)) {
                    five = input;
                    i++
                    //console.log("found five: " + five)
                }

                // 2 is the odd one out
                if (input.length == 5 && five != null && three != null && two == null && input != five && input != three) {
                    two = input;
                    i++
                    //console.log("found two: " + two);
                }

            })
        }

        var final = "";
        console.log(e.outputs);

        console.log("Numbers:");
        console.log("Zero: " + zero);
        console.log("One: " + one);
        console.log("Two: " + two);
        console.log("Three: " + three);
        console.log("Four: " + four);
        console.log("Five: " + five);
        console.log("Six: " + six);
        console.log("Seven: " + seven);
        console.log("Eight: " + eight);
        console.log("Nine: " + nine);

        
        e.outputs.forEach(function(input){

            input = alph(input);
            console.log("Checking " + input)
            
            if (input == alph(zero)) {
                final = final + "0"
            }
            if (input == alph(one)) {
                final = final + "1"
            }
            if (input == alph(two)) {
                final = final + "2"
            }
            if (input == alph(three)) {
                final = final + "3"
            }
            if (input == alph(four)) {
                final = final + "4"
            }
            if (input == alph(five)) {
                final = final + "5"
            }
            if (input == alph(six)) {
                final = final + "6"
            }
            if (input == alph(seven)) {
                final = final + "7"
            }
            if (input == alph(eight)) {
                final = final + "8"
            }
            if (input == alph(nine)) {
                final = final + "9"
            }
        });

        totalReturn = totalReturn + parseInt(final)
        console.log(parseInt(final))
                


    })
    
    console.log("Total: " + totalReturn)

}
