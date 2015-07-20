var game = new TicTacToeGame('tic-tac-toe');


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

  var board = document.getElementById('ttt-board');
      board.addEventListener('mousedown', function(event){
        //do this
        var temp = event.target.getAttribute('id');
        console.log(temp[0]  +" " + temp[2]);
        game.move(temp[0], temp[2]);
      });

      setInterval(draw, 50);

  // EXAMPLE OF MAKING MOVE ~~~~ remove this ~~~~
  /*setTimeout(function(){
    game.move(1, 1);  // Let's pretend the first player moves in the center!
  }, 2000);

  // EXAMPLE OF MAKING MOVE ~~~~ remove this ~~~~
  setTimeout(function(){
    game.move(0, 0); // Let's pretend the second player moves in the upper left!
  }, 3000);

*/
};
