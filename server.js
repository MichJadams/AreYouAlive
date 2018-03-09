const express = require('express')
const app = express()
const server = require('http').Server(app);
const io = require('socket.io')(server);


//server up some static files 
app.use('/public',express.static(__dirname +'/public'));
app.use('/js',express.static(__dirname+ '/js'));
app.use('/assests',express.static(__dirname+ '/assests'));

app.get('/', (req,res,next)=>{
    console.log("posting this "+ __dirname +'/index.html')
    res.sendFile(__dirname +'/index.html')
})
//put in some respondes to requests

server.listen(process.env.PORT || 8081, ()=>{
    console.log("listenign on port", server.address().port)
})

io.on('connection',(socket)=>{
//not sure what this line does 
    console.log("connected")

    //socket.on('move',/*the move data*/)
    socket.on('test', ()=>{
        console.log("I got a test")
    })
    socket.emit('hello', Date.now())
})