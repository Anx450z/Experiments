class Cell {
  constructor(position, possibility, value=-1) {
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

class Game extends Board{
  constructor(){
    super()
    this.gameBoard = new Board();
    this.gameOver = false
  }

  play(){

    for(var i = 0; i < 9; i++) {
      if(this.gameOver) break
      this.getUserInput()
      this.playNextMove()
    }
  
  }

  getUserInput(){
    const inputX = Math.floor(Math.random() * 3);
    const inputY = Math.floor(Math.random() * 3);
    if(inputX && inputY < 3){
      console.log("entering the values")
      // console.log("this is the board: ",this.gameBoard.board[0][0].value)
      this.gameBoard.board[inputX][inputY].value = "X"
    }else{
      console.log("wrong input value")
    }
  }

  playNextMove(){
    console.log("playing next move")
  }  
}

g1 = new Game()
g1.gameBoard.show()
g1.play()
g1.gameBoard.show()