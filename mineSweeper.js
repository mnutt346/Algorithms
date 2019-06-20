var updateBoard = function(board, click) {
  const [x, y] = click;
  if (board[x][y] === "M") {
    board[x][y] = "X";
  } else {
    checkForMines(board, x, y);
  }
  return board;
};

const checkForMines = (board, x, y) => {
  let directions = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, 1],
      [1, 1],
      [1, 0],
      [1, -1],
      [0, -1]
    ],
    rowCount = board.length,
    colCount = board[0].length;

  // check for adjacent mines
  let adjacentMines = 0;

  for (let [dirX, dirY] of directions) {
    let row = x + dirX,
      col = y + dirY;
    if (
      row >= 0 &&
      row < rowCount &&
      col >= 0 &&
      col < colCount &&
      board[row][col] === "M"
    )
      adjacentMines++;
  }

  if (adjacentMines > 0) {
    // if adjacent mines are found, set the selected element to the number of adjacent mines
    board[x][y] = `${adjacentMines}`;
  } else {
    // if no adjacent mines are found, mark the selected element as blank ('B'),
    // and set any other reveal any other unrevealed adjacent elements
    board[x][y] = "B";
    for (let [dirX, dirY] of directions) {
      let row = x + dirX,
        col = y + dirY;
      if (
        row >= 0 &&
        row < rowCount &&
        col >= 0 &&
        col < colCount &&
        board[row][col] === "E"
      ) {
        board[row][col] = "B";
        checkForMines(board, row, col);
      }
    }
  }
};

let newBoard = [
  ["E", "E", "E", "E", "E"],
  ["E", "E", "M", "E", "E"],
  ["E", "E", "E", "E", "E"],
  ["E", "E", "E", "E", "E"]
];

let click1 = [3, 0];

console.log(updateBoard(newBoard, click1));
