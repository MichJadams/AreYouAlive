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
