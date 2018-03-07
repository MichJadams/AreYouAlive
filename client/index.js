//setting up connections
const game = require("./game.js")
const Board = require("./board.js")
const socket = io()

const {log} = console
console.log("hello from the index file")
//listen for an event 



socket.on('hello',(socket)=>{
    log("server said hi", socket)
})

