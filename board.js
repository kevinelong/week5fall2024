
//columns and rows
// smaller than go game
// chess checkers 8x8
//battleship 10x10
// globe lat lng 180x180
// tic tac toe nought and crosses 3x3

const line = [".", ".", "."];
line[1] = "X";//change the middle column above
console.log(line); //print out

const board = [ //one array of rows 3x3=9
    ["X", ".", "."], //three columns per row
    [".", ".", "."], //three columns per row
    [".", ".", "X"], //three columns per row
]; //end of rows

board[1][1] = "O" // [row_index][column_index]

function printBoard(board){
    // loop through row indexes?
    for (let r = 0; r < board.length; r++) {
        rowOutput = "";
        //loop all column index
        for (let c = 0; c < board[r].length; c++) {
            let value = board[r][c];
            rowOutput += value + " ";
        }
        textR = String(r)
        if(textR.length < 2){
            textR += " ";
        }
        console.log(textR, rowOutput);
    }
}
printBoard(board);

//go board 19x19=361
const rowCount = 19
const colCount = 19
let goBoard = [] //array of rows

for(let r = 0; r < rowCount; r++){
    let row = [];
    for(let c = 0; c < colCount; c++){
        row.push(".");
    }
    goBoard.push(row);
    // goBoard[r] = row; //SAME
}

printBoard(goBoard);
