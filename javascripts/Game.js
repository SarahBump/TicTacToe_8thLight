// Feel free to look around...
//  ... but you DON'T need to change anything in this file

function TicTacToeGame(name){

  this.name = name || ("ttt-" + Date.now());
  this.p1;
  this.p2;
  this.turnNumber = 0;
  this.gameState = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];



  this.toString = function(){
    var message = "";
    message += game.gameState[0] + "\n";
    message += game.gameState[1] + "\n";
    message += game.gameState[2] + "\n";
    return message
  }

  this.checkWin = function checkWin(player){
    for(var x = 0; x < 3; x++){
      if((this.gameState[x][0] == player) && (this.gameState[x][1] == player) && (this.gameState[x][2] == player)){
        return true;
      }
    }
    for(var x = 0; x < 3; x++){
      if((this.gameState[0][x] == player) && (this.gameState[1][x] == player) && (this.gameState[2][x] == player)){
        return true;
      }
    }
    if((this.gameState[0][0] == player) && (this.gameState[1][1] == player) && (this.gameState[2][2] == player)){
      return true;
    }
    if((this.gameState[0][2] == player) && (this.gameState[1][1] == player) && (this.gameState[2][0] == player)){
      return true;
    }
    return false;

  }


  this.generateComputerMove = function(me, you){
    var valid = false;
    var randRow;
    var randCol;
      //determine best move to win, or best move to not let player win
        for(var x = 0; x < 3; x++){//across each row
          if((this.gameState[x][0] == me && this.gameState[x][1] == me) && this.gameState[x][2] == 0){
            this.gameState[x][2] = (this.turnNumber % 2) + 1;
            this.turnNumber +=1;
            return;
          }else if((this.gameState[x][1] == me && this.gameState[x][2] == me) && this.gameState[x][0] == 0){
            this.gameState[x][0] = (this.turnNumber % 2) + 1;
            this.turnNumber +=1;
            return;
          }else if((this.gameState[x][0] == me && this.gameState[x][2] == me) && this.gameState[x][1] == 0){
            this.gameState[x][1] = (this.turnNumber % 2) + 1;
            this.turnNumber +=1;
            return;
          }
        }
        for(var x = 0; x < 3; x++){//up and down column
          if((this.gameState[0][x] == me && this.gameState[1][x] == me) && this.gameState[2][x] == 0){
            this.gameState[2][x] = (this.turnNumber % 2) + 1;
            this.turnNumber +=1;
            return;
          }else if((this.gameState[1][x] == me && this.gameState[2][x] == me) && this.gameState[0][x] == 0){
            this.gameState[0][x] = (this.turnNumber % 2) + 1;
            this.turnNumber +=1;
            return;
          }else if((this.gameState[0][x] == me && this.gameState[2][x] == me) && this.gameState[1][x] == 0){
            this.gameState[1][x] = (this.turnNumber % 2) + 1;
            this.turnNumber +=1;
            return;
          }
        }
        //diagonal right to left
        if((this.gameState[0][0] == me && this.gameState[1][1] == me) && this.gameState[2][2] == 0){
          this.gameState[2][2] = (this.turnNumber % 2) + 1;
          this.turnNumber +=1;
          return;
        }else if((this.gameState[1][1] == me && this.gameState[2][2] == me) && this.gameState[0][0] == 0){
          this.gameState[0][0] = (this.turnNumber % 2) + 1;
          this.turnNumber +=1;
          return;
        }else if((this.gameState[0][0] == me && this.gameState[2][2] == me) && this.gameState[1][1] == 0){
          this.gameState[1][1] = (this.turnNumber % 2) + 1;
          this.turnNumber +=1;
          return;
        }
        //diagonal left to right
        if((this.gameState[2][0] == me && this.gameState[1][1] == me) && this.gameState[0][2] == 0){
          this.gameState[0][2] = (this.turnNumber % 2) + 1;
          this.turnNumber +=1;
          return;
        }else if((this.gameState[1][1] == me && this.gameState[0][2] == me) && this.gameState[2][0] == 0){
          this.gameState[2][0] = (this.turnNumber % 2) + 1;
          this.turnNumber +=1;
          return;
        }else if((this.gameState[2][0] == me && this.gameState[0][2] == me) && this.gameState[1][1] == 0){
          this.gameState[1][1] = (this.turnNumber % 2) + 1;
          this.turnNumber +=1;
          return;
        }
        ////////////////////////////////////////////
        for(var x = 0; x < 3; x++){//up and down each column
          if((this.gameState[x][0] == you && this.gameState[x][1] == you) && this.gameState[x][2] == 0){
            this.gameState[x][2] = (this.turnNumber % 2) + 1;
            this.turnNumber +=1;
            return;
          }else if((this.gameState[x][1] == you && this.gameState[x][2] == you) && this.gameState[x][0] == 0){
            this.gameState[x][0] = (this.turnNumber % 2) + 1;
            this.turnNumber +=1;
            return;
          }else if((this.gameState[x][0] == you && this.gameState[x][2] == you) && this.gameState[x][1] == 0){
            this.gameState[x][1] = (this.turnNumber % 2) + 1;
            this.turnNumber +=1;
            return;
          }
        }
        for(var x = 0; x < 3; x++){//across each row
          if((this.gameState[0][x] == you && this.gameState[1][x] == you) && this.gameState[2][x] == 0){
            this.gameState[2][x] = (this.turnNumber % 2) + 1;
            this.turnNumber +=1;
            return;
          }else if((this.gameState[1][x] == you && this.gameState[2][x] == you) && this.gameState[0][x] == 0){
            this.gameState[0][x] = (this.turnNumber % 2) + 1;
            this.turnNumber +=1;
            return;
          }else if((this.gameState[0][x] == you && this.gameState[2][x] == you) && this.gameState[1][x] == 0){
            this.gameState[1][x] = (this.turnNumber % 2) + 1;
            this.turnNumber +=1;
            return;
          }
        }
        //diagonal right to left
        if((this.gameState[0][0] == you && this.gameState[1][1] == you) && this.gameState[2][2] == 0){
          this.gameState[2][2] = (this.turnNumber % 2) + 1;
          this.turnNumber +=1;
          return;
        }else if((this.gameState[1][1] == you && this.gameState[2][2] == you) && this.gameState[0][0] == 0){
          this.gameState[0][0] = (this.turnNumber % 2) + 1;
          this.turnNumber +=1;
          return;
        }else if((this.gameState[0][0] == you && this.gameState[2][2] == you) && this.gameState[1][1] == 0){
          this.gameState[1][1] = (this.turnNumber % 2) + 1;
          this.turnNumber +=1;
          return;
        }
        //diagonal left to right
        if((this.gameState[2][0] == you && this.gameState[1][1] == you) && this.gameState[0][2] == 0){
          this.gameState[0][2] = (this.turnNumber % 2) + 1;
          this.turnNumber +=1;
          return;
        }else if((this.gameState[1][1] == you && this.gameState[0][2] == you) && this.gameState[2][0] == 0){
          this.gameState[2][0] = (this.turnNumber % 2) + 1;
          this.turnNumber +=1;
          return;
        }else if((this.gameState[2][0] == you && this.gameState[0][2] == you) && this.gameState[1][1] == 0){
          this.gameState[1][1] = (this.turnNumber % 2) + 1;
          this.turnNumber +=1;
          return;
        }



        ////////////////////////////////////////////
        while(!valid){//the random move wasn't possible
          randRow = Math.floor(Math.random() * 3);
          randCol = Math.floor(Math.random() * 3);
          if(this.gameState[1][1] == 0){
            this.gameState[1][1] = (this.turnNumber % 2) + 1;
            this.turnNumber +=1;
            return;
          }
          //////////////////////////////////////////


          //////////////////////////////////////////
          if(this.gameState[randRow][randCol] == 0){
            this.gameState[randRow][randCol] = (this.turnNumber % 2) + 1;
            this.turnNumber +=1;
            valid = true;
            return;
          }
        }


  }

  this.computerMove = function computerMove(){

    console.log(this.turnNumber)
    if(this.turnNumber % 2 == 0 && this.p1 === false){
      console.log('computer player 1 move')
      this.generateComputerMove(1, 2);
    }
    if(this.turnNumber % 2 == 1 && this.p2 === false){
        console.log('computer player 2 move')
      this.generateComputerMove(2, 1);
    }


    return this;
  };


  this.move = function move(rowIdx, columnIdx){

    if(this.gameState[rowIdx][columnIdx] == 0){
        this.gameState[rowIdx][columnIdx] = (this.turnNumber % 2) + 1;
        this.turnNumber += 1;
        if(this.turnNumber == 9){
          alert("Stalemate!");
          clearInterval(game.refreshID)
        }
        if(this.checkWin(1)){
          alert("Player 1 wins!");
        }else if(this.checkWin(2)){
          alert("Player 2 wins!");
        }
    }

    return this;
  };
}
