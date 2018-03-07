'use strict'
const express = require('express')

const path = require('path')
const app = express()
//start the server
const server = app.listen(1337,()=>{
    console.log("listening on port 1337")
})
//server up some static files 
app.use(express.static(path.join(__dirname, 'public')));

const io = require('socket.io')(server);
//put in some respondes to requests

io.on('connection',(socket)=>{
//not sure what this line does 
    console.log("connected")
    const {id} = socket
    //socket.on('move',/*the move data*/)
    
    socket.emit('hello', Date.now())
})