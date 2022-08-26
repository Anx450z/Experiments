class Cell {
  constructor(position, possibility, value) {
    this.position = { x: -1, y: -1 };
    this.value = value;
    this.possibility = possibility;
  }
}

class Board {
  constructor() {
    const possibilities = [1 / 3];
    this.board = new Array(3).fill(-1);

    for (var i = 0; i < 3; i++) {
      this.board[i] = new Array(3).fill(-1);
    }

    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        const position = {
          x: i,
          y: j,
        };
        this.board[i][j] = new Cell(position, possibilities, this.board[i][j]);
      }
    }
  }

  show() {
    for (let i = 0; i < 3; i++) {
      let rowAnswer = "";
      for (let j = 0; j < 3; j++) {
        rowAnswer += this.board[i][j].value + " ";
      }
      console.log(rowAnswer);
    }
  }
}

class Game{
  constructor(){
    this.board = new Board();
    this.gameOver = false
  }

  play(){
  
  }

  getUserInput(){
    
  }
}

