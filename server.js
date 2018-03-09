const express = require('express')
const app = express()
const server = require('http').Server(app);
const io = require('socket.io')(server);


//server up some static files 
app.use('/public',express.static(__dirname +'/public'));
app.use('/js',express.static(__dirname+ '/js'));
app.use('/assests',express.static(__dirname+ '/assests'));

app.get('/', (req,res,next)=>{
  
    res.sendFile(__dirname +'/index.html')
})
//put in some respondes to requests

// app.get('/', (req,res,next)=>{
//     console.log("sending the image?")
//     res.sendFile( __dirname+'/assests/logo.svg')
// }) 

server.listen(process.env.PORT || 8081, ()=>{
    console.log("listenign on port", server.address().port)
})

server.playerId = 0

io.on('connection',(socket)=>{
//not sure what this line does 
    console.log("connected")
    socket.on('newPlayer',function(){
        socket.player ={
            id: server.playerId++,
            x: 345,
            y: 456
        }
        socket.emit('allPlayers',getAllPlayers());
        socket.broadcast.emit('newPlayer',socket.player)
    })

    //socket.on('move',/*the move data*/)
    socket.on('test', ()=>{
        console.log("I got a test")
    })
    socket.on('movement', (direction, cordx,cordy)=>{
        console.log("moveing!", direction, "cordx:", cordx, "cordy:",cordy)
    })
    socket.emit('hello', Date.now())
})
function getAllPlayers(){
    var players = []
    Object.keys(io.sockets.connected).forEach(function(socketID){
        var player = io.sockets.connected[socketID].player;
        if(player) players.push(player)
    })
    console.log("returning all the players", players)
    return players
}