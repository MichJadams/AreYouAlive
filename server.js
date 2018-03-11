const express = require('express')
const app = express()
const server = require('http').Server(app);
const io = require('socket.io')(server);
const cookieParser = require("socket.io-cookie-parser")

//server up some static files 
app.use('/public',express.static(__dirname +'/public'));
app.use('/js',express.static(__dirname+ '/js'));
app.use('/assests',express.static(__dirname+ '/assests'));

app.get('/', (req,res,next)=>{
  
    res.sendFile(__dirname +'/index.html')
})

server.listen(process.env.PORT || 8081, ()=>{
    console.log("listenign on port", server.address().port)
})

io.use(cookieParser());

server.arrPlayers = {}

io.on('connection',(socket)=>{
 
// console.log("this is the socket REQUEST", socket.request.cookies)
socket.on('newPlayer',function(isCat){
    // console.log("connected")
        socket.player ={
            x: 0,
            y: 0,
            isCat:isCat
        }
        server.arrPlayers[socket.request.cookies.io] = socket.player
        // console.log("From ther server, a new client has hooked in", server.arrPlayers)
        
        
        const outPlayer = {}
        // const id = socket.request.cookies.io
        outPlayer[socket.request.cookies.io] = socket.player
        console.log("sending this out", server.arrPlayers)
        
        // io.emit('allPlayers',server.arrPlayers);
        socket.emit('allPlayers',server.arrPlayers)
        io.emit('newPlayer',[outPlayer,server.arrPlayers],)
    })

    //socket.on('move',/*the move data*/)
    socket.on('test', ()=>{
        console.log("I got a test")
    })
    socket.on('movement', (direction)=>{
        console.log("This player", socket.request.cookies.io, "wants to move")
        
        
        // var player = io.sockets.connected[socketID].player;
        var player = server.arrPlayers[socket.request.cookies.io] //might need to rework this
        // console.log("trying to acess the location of the player",server.arrPlayers )
        if(direction == "up"){
            player.y -= 10
            // console.log("player is moving up", player.y)
        } 
        if(direction == "down"){
            player.y += 10
            // console.log("player is moving down", player.y)
        }
        if(direction == "left"){
            player.x += 10
            // console.log("player is moving left", player.y)
        }
        if(direction == "right"){
            player.x -= 10
            // console.log("player is moving right", player.y)
        }
        // console.log("this player:",playerID," is move moveing!", direction, ", cords cordx:", player.x, "cordy:",player.y, "..and the player is a cat", player.isCat)
        const outPlayer = {}
        // const id = socket.request.cookies.io
        outPlayer[socket.request.cookies.io] = player
        // socket.emit('placementUpdate',playerPlacement())
        io.emit('playerPlacementUpdate',outPlayer)
    })
})
// function playerPlacement(){
//     console.log("returning all the players from the player placement function", server.arrPlayers)
//     return server.arrPlayers
// }