/*
A robot located at the top left corner of an n x n grid is trying to reach the bottom right corner. The robot can move either up, down, left, or right, but cannot visit the same spot twice. How many possible unique paths are there to the bottom right corner?

Make your solution work for a grid of any size.
*/

const makeBoard = n => {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  };
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  };
  return board;
};

const robotPaths = n => {
  let newBoard = makeBoard(n);
  let solutions = 0;

  let findPaths = (row, col) => {
    newBoard.togglePiece(row, col);

    if (row === n - 1 && col === n - 1) {
      solutions++;
      newBoard.togglePiece(row, col);
      return;
    }
    //check if robot can go up
    if (row - 1 >= 0 && !newBoard.hasBeenVisited(row - 1, col)) {
      findPaths(row - 1, col);
    }
    //check if robot can go down
    if (row + 1 <= n - 1 && !newBoard.hasBeenVisited(row + 1, col)) {
      findPaths(row + 1, col);
    }
    //check if robot can go right
    if (col + 1 <= n - 1 && !newBoard.hasBeenVisited(row, col + 1)) {
      findPaths(row, col + 1);
    }
    //check if robot can go left
    if (col - 1 >= 0 && !newBoard.hasBeenVisited(row, col - 1)) {
      findPaths(row, col - 1);
    }

    newBoard.togglePiece(row, col);
  };
  findPaths(0, 0);

  return solutions;
};
