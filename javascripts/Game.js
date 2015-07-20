function TicTacToeGame(name){

  this.name = name || ("ttt-" + Date.now());

  this.firebaseURL = "https://wdi-tictactoe.firebaseio.com/games/" + this.name;
  this.storageBot = new Firebase(this.firebaseURL);
  this.turnNumber = 0;
  this.gameState = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

  var that = this;
  this.storageBot.on("value", function(snapshot) {
    var newGameInfo = snapshot.val();
    that.gameState = newGameInfo.gameState;
    that.turnNumber = newGameInfo.turnNumber;
  });

  this.storageBot.set({
    name: this.name,
    gameState: this.gameState,
    turnNumber: this.turnNumber
  })

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


  this.generateComputerMove = function(){
    var valid = false;
    var randRow;
    var randCol;

        for(var x = 0; x < 3; x++){//across each row
          if((this.gameState[x][0] == 2 && this.gameState[x][1] == 2) && this.gameState[x][2] == 0){
            this.gameState[x][2] = 2;
            this.turnNumber +=1;
            return;
          }else if((this.gameState[x][1] == 2 && this.gameState[x][2] == 2) && this.gameState[x][0] == 0){
            this.gameState[x][0] = 2;
            this.turnNumber +=1;
            return;
          }else if((this.gameState[x][0] == 2 && this.gameState[x][2] == 2) && this.gameState[x][1] == 0){
            this.gameState[x][1] = 2;
            this.turnNumber +=1;
            return;
          }
        }
        for(var x = 0; x < 3; x++){//up and down column
          if((this.gameState[0][x] == 2 && this.gameState[1][x] == 2) && this.gameState[2][x] == 0){
            this.gameState[2][x] = 2;
            this.turnNumber +=1;
            return;
          }else if((this.gameState[1][x] == 2 && this.gameState[2][x] == 2) && this.gameState[0][x] == 0){
            this.gameState[0][x] = 2;
            this.turnNumber +=1;
            return;
          }else if((this.gameState[0][1] == 2 && this.gameState[2][x] == 2) && this.gameState[1][x] == 0){
            this.gameState[1][x] = 2;
            this.turnNumber +=1;
            return;
          }
        }
        //diagonal right to left
        if((this.gameState[0][0] == 2 && this.gameState[1][1] == 2) && this.gameState[2][2] == 0){
          this.gameState[2][2] = 2;
          this.turnNumber +=1;
          return;
        }else if((this.gameState[1][1] == 2 && this.gameState[2][2] == 2) && this.gameState[0][0] == 0){
          this.gameState[0][0] = 2;
          this.turnNumber +=1;
          return;
        }else if((this.gameState[0][0] == 2 && this.gameState[2][2] == 2) && this.gameState[1][1] == 0){
          this.gameState[1][1] = 2;
          this.turnNumber +=1;
          return;
        }
        //diagonal left to right
        if((this.gameState[2][0] == 2 && this.gameState[1][1] == 2) && this.gameState[0][2] == 0){
          this.gameState[0][2] = 2;
          this.turnNumber +=1;
          return;
        }else if((this.gameState[1][1] == 2 && this.gameState[0][2] == 2) && this.gameState[2][0] == 0){
          this.gameState[2][0] = 2;
          this.turnNumber +=1;
          return;
        }else if((this.gameState[2][0] == 2 && this.gameState[0][2] == 2) && this.gameState[1][1] == 0){
          this.gameState[1][1] = 2;
          this.turnNumber +=1;
          return;
        }
        ////////////////////////////////////////////
        for(var x = 0; x < 3; x++){//across each row
          if((this.gameState[x][0] == 1 && this.gameState[x][1] == 1) && this.gameState[x][2] == 0){
            this.gameState[x][2] = 2;
            this.turnNumber +=1;
            return;
          }else if((this.gameState[x][1] == 1 && this.gameState[x][2] == 1) && this.gameState[x][0] == 0){
            this.gameState[x][0] = 2;
            this.turnNumber +=1;
            return;
          }else if((this.gameState[x][0] == 1 && this.gameState[x][2] == 1) && this.gameState[x][1] == 0){
            this.gameState[x][1] = 2;
            this.turnNumber +=1;
            return;
          }
        }
        for(var x = 0; x < 3; x++){//across each row
          if((this.gameState[0][x] == 1 && this.gameState[1][x] == 1) && this.gameState[2][x] == 0){
            this.gameState[2][x] = 2;
            this.turnNumber +=1;
            return;
          }else if((this.gameState[1][x] == 1 && this.gameState[2][x] == 1) && this.gameState[0][x] == 0){
            this.gameState[0][x] = 2;
            this.turnNumber +=1;
            return;
          }else if((this.gameState[0][1] == 1 && this.gameState[2][x] == 1) && this.gameState[1][x] == 0){
            this.gameState[1][x] = 2;
            this.turnNumber +=1;
            return;
          }
        }
        //diagonal right to left
        if((this.gameState[0][0] == 1 && this.gameState[1][1] == 1) && this.gameState[2][2] == 0){
          this.gameState[2][2] = 2;
          this.turnNumber +=1;
          return;
        }else if((this.gameState[1][1] == 1 && this.gameState[2][2] == 1) && this.gameState[0][0] == 0){
          this.gameState[0][0] = 2;
          this.turnNumber +=1;
          return;
        }else if((this.gameState[0][0] == 1 && this.gameState[2][2] == 1) && this.gameState[1][1] == 0){
          this.gameState[1][1] = 2;
          this.turnNumber +=1;
          return;
        }
        //diagonal left to right
        if((this.gameState[2][0] == 1 && this.gameState[1][1] == 1) && this.gameState[0][2] == 0){
          this.gameState[0][2] = 2;
          this.turnNumber +=1;
          return;
        }else if((this.gameState[1][1] == 1 && this.gameState[0][2] == 1) && this.gameState[2][0] == 0){
          this.gameState[2][0] = 2;
          this.turnNumber +=1;
          return;
        }else if((this.gameState[2][0] == 1 && this.gameState[0][2] == 1) && this.gameState[1][1] == 0){
          this.gameState[1][1] = 2;
          this.turnNumber +=1;
          return;
        }


        ////////////////////////////////////////////
        while(!valid){//no winning move was possible
          randRow = Math.floor(Math.random() * 3);
          randCol = Math.floor(Math.random() * 3);
          if(this.gameState[1][1] == 0){
            this.gameState[1][1] = 2;
            this.turnNumber +=1;
            return;
          }
          //////////////////////////////////////////


          //////////////////////////////////////////
          if(this.gameState[randRow][randCol] == 0){
            this.gameState[randRow][randCol] = 2;
            this.turnNumber +=1;
            valid = true;
            return;
          }
        }


  }

  this.move = function move(rowIdx, columnIdx){
    if(this.gameState[rowIdx][columnIdx] == 0){
        this.gameState[rowIdx][columnIdx] = (this.turnNumber % 2) + 1;
        this.turnNumber += 1;
        if(this.turnNumber % 2 == 1){
          this.generateComputerMove();
        }
        this.storageBot.update({
          gameState: this.gameState,
          turnNumber: this.turnNumber
        });
        if(this.checkWin(1)){

          alert("Player 1 wins!");
        }else if(this.checkWin(2)){
          alert("Player 2 wins!");
        }
    }
    return this;
  };
}
