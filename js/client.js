//put socket connectsion in here 
AreYouAlive = AreYouAlive || {} 

Client = {};

Client.socket = io.connect()

Client.sendTest = ()=>{
    console.log("test send to the server")
    Client.socket.emit('test')
}
Client.sendMovement= function (direction, cordx, cordy){
    console.log("moveing this direction", direction)
    Client.socket.emit('movement',direction,cordx,cordy)
}
Client.createNewPlayer=function(){
    Client.socket.emit('newPlayer')
}
Client.socket.on('newPlayer', function(data){
    Game.addNewPlayer(data.id,data.x,data.y)
})

Client.sock.on('allPlayers', function(data){
    console.log("these are all the players ", data)
    for(var i =0; i < data.length; i ++){
        Game.addNewPlayer(data[i].id,data[i].x,data[i].y)
    }
})