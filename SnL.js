let currentT = 0;
const players =[{name: "Player 1", pos: 0},
                {name: "Player 2", pos: 0}];

function setGameOver()
{
    window.location.reload();                   // refresh or reload game once finish
}

function turns() {
  var randNum = Math.floor(Math.random() * 6) + 1;
  var move = document.querySelector('.move');   // text for players movement
  var die = document.querySelector('.die');     // text for players die rolling
  var next = document.querySelector('.next');   // text for next player
  die.textContent = players[currentT].name + " rolled for " + randNum;
  players[currentT].pos += randNum;

  switch(players[currentT].pos){
    //ladders
    case 8: alert(players[currentT].name + " found a ladder! Advance to square 15.");
            players[currentT].pos = 15; break;
    case 19: alert(players[currentT].name + " found a ladder! Advance to square 24.");
            players[currentT].pos = 24; break;

    //snakes
    case 15: alert(players[currentT].name + " gulped by a snake! Back to square 5.");
            players[currentT].pos = 5; break;
    case 23: alert(players[currentT].name + " gulped by a snake! Back to square 16.");
            players[currentT].pos = 16; break;
  }

  move.textContent = players[currentT].name + "'s position is at " + players[currentT].pos + ".";

  if (players[currentT].pos >= 25){
    alert("Congratulation " + players[currentT].name + "! You won the game.");
    setGameOver();
  }
  currentT++;
  next.textContent = ("Player 2, you're next!");
  if (currentT >= players.length) {
    currentT = 0;
    next.textContent = ("Player 1, you're next!");
  }

}
