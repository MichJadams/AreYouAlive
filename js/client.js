//put socket connectsion in here 
AreYouAlive = AreYouAlive || {} 

Client = {};

Client.socket = io.connect()

Client.sendTest = ()=>{
    console.log("test send to the server")
    Client.socket.emit('test')
}
Client.sendMovement= function (direction){
    console.log("moveing this direction", direction)
    Client.socket.emit('movement',direction)
}
