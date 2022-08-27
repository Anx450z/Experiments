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
      this.check()
      this.playNextMove()
    }
  
  }

  checkVertical(){
    console.log("checking vertical position")
  }

  checkHorizontal(){
    console.log("checking horizontal")
  }

  checkDiagonal(){
    console.log("checking diagonal position")
  }

  getUserInput(){
    const inputX = Math.floor(Math.random() * 3);
    const inputY = Math.floor(Math.random() * 3);
    if(inputX <3 && inputY < 3){
      console.log("entering the values")
      // console.log("this is the board: ",this.gameBoard.board[0][0].value)
      this.gameBoard.board[inputX][inputY].value = "X"
    }else{
      console.log("wrong input value")
    }
  }

  calculateWinPossibilities(){
    console.log("calculating winning possibilities")
  }

  playNextMove(){
    console.log("playing next move")
    this.calculateWinPossibilities()
  }
  
  check(){
    this.checkVertical()
    this.checkHorizontal()
    this.checkDiagonal()
  }
}

g1 = new Game()
g1.gameBoard.show()
g1.play()
g1.gameBoard.show()