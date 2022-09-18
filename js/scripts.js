function Game(p1,p2){
  this.player1 = p1;
  this.player2 = p2;
}

function Player(name){
  this.playerName = name;
  this.turnScore = 0;
  this.totalScore = 0;
}

function playDice(min, max) {
  min = Math.ceil(1);
  max = Math.floor(6);
  return Math.floor(Math.random() * (6 - 1 + 1) + 1);
}

Player.prototype.playDice = function(min, max){
  min = Math.ceil(1);
  max = Math.floor(6);
  let output = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  if (output != 1) {
    console.log(output);
    return this.turnScore += output;
  } else if (output=1) {
    return this.turnScore = 0, this.totalScore = 0;
  }
}
Player.prototype.holdDice = function(){
  this.totalScore += this.turnScore;
  this.turnScore = 0;
  return this.totalScore += this.turnScore, this.turnScore = 0;
}
