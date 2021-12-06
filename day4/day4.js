var fs = require('fs');
var filename = "day4input.txt";

fs.readFile(filename, 'utf8', function(err, data){
    if (err) throw err;

    //set up data
    var numbers = data.split("\r\n")[0].split(",")
    var boards = [];

    var allBoards = data.split("\r\n\r\n")
    
    //console.log(allBoards[1])

    allBoards.forEach(function(board, i){
        if (i > 0) {
            var newBoard = {}
            newBoard.row1 = board.split("\r\n")[0];
            newBoard.row2 = board.split("\r\n")[1];
            newBoard.row3 = board.split("\r\n")[2];
            newBoard.row4 = board.split("\r\n")[3];
            newBoard.row5 = board.split("\r\n")[4];

        }
        boards.push(newBoard);
    })


    part1(numbers, boards);
})

var part1 = function(numbers, boards) {

    console.log(numbers)
    console.log(boards)

}