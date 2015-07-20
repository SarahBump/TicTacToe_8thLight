
//  creates a new game object with a name
    // Modify this name to something unique for you
var game = new TicTacToeGame('games-for-days');


/**
 * draw() is the function used to display a user's action
 */
function draw(){
  var tttRows =  document.getElementsByClassName('ttt-row');
  for (var row = 0; row < 3; row++) {
    for(var col = 0; col < 3;col++){
        if (game.gameState[row][col] == 0) {
          tttRows[row].children[col].innerHTML = '';
        }
        else if(game.gameState[row][col] == 1){
          tttRows[row].children[col].innerHTML = 'X';
        }else if(game.gameState[row][col] == 2){
          tttRows[row].children[col].innerHTML = 'O';
        }
    }
  }
}

/**
 *  window.onload()
 */
window.onload = function(){

    game.p1 = confirm("Is player 1 a human? (ok for yes)");
    game.p2 = confirm("Is player 2 a human? (ok for yes)");

    var board = document.getElementById('ttt-board');


    board.addEventListener('mousedown', function(event){
      //do this
      var temp = event.target.getAttribute('id');
      console.log(temp[0]  +" " + temp[2]);

      game.move(temp[0], temp[2]);

    });


    game.refreshID  = setInterval(function(){
      draw();
      game.computerMove();

      if(game.checkWin(1)){
        alert("Player 1 wins!");

          clearInterval(game.refreshID)
      }else if(game.checkWin(2)){
        alert("Player 2 wins!");

          clearInterval(game.refreshID)
      }
    }, 1000)

    setInterval(draw, 50);


};
