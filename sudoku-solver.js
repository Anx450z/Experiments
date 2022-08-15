class Sudoku {
  constructor() {
    const possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    this.board = new Array(9).fill(-1);

    for (let i = 0; i < 9; i++) {
      this.board[i] = new Array(9).fill(-1);
    }
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        const position = {
          row: i,
          column: j,
        };
        const cell = new Cell(position, possibilities);
        this.board[i][j] = cell;
      }
    }
  }

  show(board = this.board) {
    for (let i = 0; i < 9; i++) {
      let rowAnswer = "";
      for (let j = 0; j < 9; j++) {
        rowAnswer += board[i][j].value + " ";
      }
      console.log(rowAnswer);
    }
  }

  refill() {
    const sudoku = [
      [0, 0, 4, 0, 5, 0, 0, 0, 0],
      [9, 0, 0, 7, 3, 4, 6, 0, 0],
      [0, 0, 3, 0, 2, 1, 0, 4, 9],
      [0, 3, 5, 0, 9, 0, 4, 8, 0],
      [0, 9, 0, 0, 0, 0, 0, 3, 0],
      [0, 7, 6, 0, 1, 0, 9, 2, 0],
      [3, 1, 0, 9, 7, 0, 2, 0, 0],
      [0, 0, 9, 1, 8, 2, 0, 0, 0],
      [0, 0, 0, 0, 6, 0, 1, 0, 0],
    ];

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        this.board[i][j].value = sudoku[i][j];
      }
    }
  }

  rowCheck(cell) {
    let toRemove = [];
    const row = cell.position.row;
    for (let column = 0; column < 9; column++) {
      if (this.board[row][column].value !== 0) {
        toRemove.push(this.board[row][column].value);
      }
    }
    // console.log("Row values to remove: ", toRemove);
    cell.possibilities = cell.possibilities.filter(function (el) {
      return toRemove.indexOf(el) < 0;
    });
    // console.log("possibilities",cell.possibilities)
  }

  colCheck(cell) {
    let toRemove = [];
    const column = cell.position.column;
    for (let row = 0; row < 9; row++) {
      if (this.board[row][column].value !== 0) {
        toRemove.push(this.board[row][column].value);
      }
    }
    // console.log("Column values to remove: ", toRemove);
    cell.possibilities = cell.possibilities.filter(function (el) {
      return toRemove.indexOf(el) < 0;
    });
    // console.log("possibilities",cell.possibilities)
  }

  blockCheck(cell) {
    let toRemove = [];
    const blockColumn = 3 * Math.floor(cell.position.column / 3);
    const blockRow = 3 * Math.floor(cell.position.row / 3);
    for (let row = blockRow; row < blockRow + 3; row++) {
      for (let column = blockColumn; column < blockColumn + 3; column++) {
        if (this.board[row][column].value !== 0) {
          toRemove.push(this.board[row][column].value);
        }
      }
    }
    // console.log("Block values to remove: ", toRemove);
    cell.possibilities = cell.possibilities.filter(function (el) {
      return toRemove.indexOf(el) < 0;
    });
  }

  fillPossibilities(cell) {
    if (cell.possibilities.length === 1) {
      cell.value = cell.possibilities[0];
    }
  }

  store() {
    const store = this.board;
    console.log("Store");
    this.show(store);
    return store;
  }

  solve() {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (this.board[i][j].value === 0) {
          this.rowCheck(this.board[i][j]);
          this.colCheck(this.board[i][j]);
          this.blockCheck(this.board[i][j]);
        } else {
          // console.log("skipping", i, j);
        }
        // console.log("final possibilities :", this.board[i][j].possibilities);
        this.fillPossibilities(this.board[i][j]);
      }
    }
  }

  fullSolve(itr = 81) {
    for (let i = 0; i < itr; i++) {
      let counter = 0;
      console.log(`Iteration ${i}`);
      this.solve();
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (this.board[i][j].value !== 0) {
            counter += 1;
          }
        }
      }
      console.log("counter value", counter);
      if (counter === 81) {
        break;
      }
    }
  }
}

class Cell {
  constructor(position, possibilities, value = 0) {
    this.position = {
      row: position.row,
      column: position.column,
    };

    this.possibilities = possibilities;

    this.value = value;
  }
}

const s1 = new Sudoku();

s1.refill();
s1.fullSolve(20);
s1.show();
