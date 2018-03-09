//sets up the game canvas , and delcare a game state of Game
var Game = {}

Game.init = ()=>{
    game.stage.disableVisilityChange = true; //causes the game to keep reacting to game messages from the serve, even when it is not the focus 
}
Game.preLoad = ()=>{
    game.load.image('sprite','../assets/bright-green-square.svg.png');
}

Game.create = ()=>{
    
}
Game.update=()=>{

}