//put socket connectsion in here 
AreYouAlive = AreYouAlive || {} 

Client = {};

Client.socket = io.connect()

Client.sendTest = ()=>{
    console.log("test send to the server")
    Client.socket.emit('test')
}
Client.sendMovement= function (direction, cordx, cordy,playerID,isCat){
    console.log("moveing this direction", direction)
    Client.socket.emit('movement',direction,cordx,cordy,playerID,isCat)
}
Client.createNewPlayer=function(isCat){
    Client.socket.emit('newPlayer',isCat)
}
Client.socket.on('newPlayer', function(data){
    console.log("shouting out from teh client socket thingy", AreYouAlive)
    const func = AreYouAlive.game.state.states.Game.addNewPlayer
    func(data.id,data.x,data.y,data.isCat)
})

Client.socket.on('allPlayers', function(data){
    console.log("these are all the players ", data)
    console.log("shouting out from teh client socket thingy", AreYouAlive.game.state.states.Game.addNewPlayer)
    const func = AreYouAlive.game.state.states.Game.addNewPlayer
    for(var i =0; i < data.length; i ++){
        func(data[i].id,data[i].x,data[i].y,data[i].isCat)
        console.log("this player, ", data[i], "was added to the game state",AreYouAlive.game.state.states.Game )
    }
})
client.socket.on('movement',function(direction, cordx,cordy, playerID){

})