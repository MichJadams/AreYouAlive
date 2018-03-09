//put socket connectsion in here 


Client = {};

Client.socket = io.connect()

Client.sendTest = ()=>{
    console.log("test send to the server")
    Client.socket.emit('test')
}
