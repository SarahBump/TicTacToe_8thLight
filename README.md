# TicTacToe_8thLight
Greetings 8th Light! This is my unbeatable game of tic tac toe -- where the computer always wins!

This is a complete client-side application using Javascript, HTML, and CSS.

What makes this game 'unbeatable' are the conditional statements written in Game.js, here is an example of that code:
```javascript
for(var x = 0; x < 3; x++){
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

```
##Screenshot

![TicTacToe](/TicTac.png)
