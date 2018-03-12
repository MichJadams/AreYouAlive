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
server.waitingRoomOccupancy = 0 
server.arrPlayers = {}
server.moveticY = 0 
server.moveticX = 0
server.fishMove = false
server.fish = [{x:getRandomInt(0,800),y:getRandomInt(0,800)},{x:getRandomInt(0,800),y:getRandomInt(0,800)},{x:getRandomInt(0,800),y:getRandomInt(0,800)}]
io.on('connection',(socket)=>{
    server.time = 400
 
// console.log("this is the socket REQUEST", socket.request.cookies)
socket.on('newPlayer',function(isCat){
    // console.log("connected")
    console.log("friend joined ")
        const coords = [getRandomInt(0,800),getRandomInt(0,800)]
        socket.player ={
            x: coords[0],
            y: coords[1],
            isCat:isCat
        }
        server.arrPlayers[socket.request.cookies.io] = socket.player
        // console.log("From ther server, a new client has hooked in", server.arrPlayers)
        const outPlayer = {}
        // const id = socket.request.cookies.io
        outPlayer[socket.request.cookies.io] = socket.player
        console.log("sending this out", server.arrPlayers)
        
        // io.emit('allPlayers',server.arrPlayers);
        if(socket.player.isCat){
            console.log("is a cat")
        }else{
            io.emit('friendJoined')
            io.emit('newPlayer',[outPlayer,server.arrPlayers])
            socket.emit('allPlayers',server.arrPlayers)
        }
    })

    //socket.on('move',/*the move data*/)
    socket.on('test', ()=>{
        console.log("I got a test")
    })
    socket.on('GameOver',winner=>{
        io.emit('GameOver',winner)
    })
    socket.on('whatTime',()=>{
        server.time -=1
        io.emit('whatTime',server.time)
        io.emit('fishPositions',fishPositions())
    })
    socket.on('playerJoined', ()=>{
        server.waitingRoomOccupancy +=1
        if(server.waitingRoomOccupancy >=2){
            io.emit('startGame')
        }
    })
    socket.on('outOfBounds',()=>{
        var player = server.arrPlayers[socket.request.cookies.io]
        player.x = 250
        player.y = 250 
        const outPlayer = {}
        outPlayer[socket.request.cookies.io] = player
        console.log("PLAYER OUT OF BOUNDS")        
        io.emit('outOfBounds',outPlayer)
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

        // io.emit('fishPositions',fishPositions())
    })
})
// function playerPlacement(){
//     console.log("returning all the players from the player placement function", server.arrPlayers)
//     return server.arrPlayers
// }
function fishPositions(){
    //this logic is super broken
    // for(let i = 0; i < server.fish.length; i ++){
    //     if(server.fishMove == true){

    //     }
    // }

    for(let i = 0; i < server.fish.length; i ++){
        const upOrDown = coinFlip()
        const forwardOrBackWard = coinFlip()
        let first = getRandomInt(0,100)
        let second = getRandomInt(0,100)
        if(first>second){
            // console.log("_________________")
            first = getRandomInt(0,100)
            second = getRandomInt(0,100)
            if(first>second){
                server.fish[i].x = server.fish[i].x + 10

            }else{
                server.fish[i].x = server.fish[i].x - 10

            }
        }else{
            // console.log("XXXXXXXXXXXXXXXXXXX")
            first = getRandomInt(0,100)
            second = getRandomInt(0,100)
            if(first>second){
                server.fish[i].y = server.fish[i].y + 10 //random number

            }else{
                server.fish[i].y = server.fish[i].y - 10 //random number

            }

        }
    }

    // console.log("jfkdlsj", server.moveticX)
    // if(server.fishMove == true){

    //     if(server.moveticY < 10){
    //         server.moveticY += 1 
    //     }else{
    //         server.moveticX += 1
    //     }
    //     if(server.moveticX>= 10 && server.moveticY >= 10){
    //         // console.log("flipped", server.fishMove)
    //         server.fishMove = !server.fishMove
    //     }
    // }
    // if(server.fishMove == false){
    //     if(server.moveticY > 0){
    //         server.moveticY -= 1 
    //     }else{
    //         server.moveticX -= 1
    //     }
    //     if(server.moveticX <= 0 && server.moveticY <= 0){
    //         // console.log("flipped", server.fishMove)
    //         server.fishMove = !server.fishMove
    //     }
    // }
    // console.log("movetic x",server.moveticX)
    // console.log("movetic y",server.moveticY)
    return server.fish
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
function coinFlip() {
    return (Math.floor(Math.random() * 2) == 0);
}


