AreYouAlive = AreYouAlive || {} 
AreYouAlive.Game = function(){}

AreYouAlive.Game={
    create: function(){
        this.game.world.setBounds(0,0,1920,1920)
        this.background = this.game.add.tileSprite(0, 0,
        this.game.world.width, this.game.world.height, 'waterTile')
        
        this.upKey = this.input.keyboard.addKey(Phaser.Keyboard.W);
        this.downKey = this.input.keyboard.addKey(Phaser.Keyboard.S);
        this.leftKey = this.input.keyboard.addKey(Phaser.Keyboard.D);
        this.rightKey = this.input.keyboard.addKey(Phaser.Keyboard.A);  

        Client.createNewPlayer(this.game.isCat)    
            
        this.game.playerID = 0
        this.game.playerArr = {}
        this.game.player = {}
        },
    update: function(){
            
        Client.socket.on('newPlayer', (data)=>{
            // console.log("data from the new player function", Object.keys(data)[0] )
            // const func = AreYouAlive.game.state.states.Game.addNewPlayer
            console.log("this is the data you recieve upon first entering the room", data)
            const newGuy = data[0]

            // this.game.playerID = Object.keys(newGuy)[0]
            this.game.playerArr[Object.keys(newGuy)[0]] = this.game.add.sprite(0,0,'player')
            this.game.playerArr[Object.keys(newGuy)[0]].scale.setTo(.2)
            console.log("this is the player arr",this.game.playerArr)

            // func(data.id,data.x,data.y,data.isCat)
            // document.cookie.id = 
            console.log("this is the array to be looped through", Object.keys(data[1]))
            for(key in data[1]){
                // console.log("this player is being painted", data)
                //
                if(key != undefined){
                    if(key != Object.keys(newGuy)[0]){

                        console.log("this is the dady key")
                        console.log("this is the key", key)
                        this.game.playerArr[key].x = data[1][key].x
                        this.game.playerArr[key].y = data[1][key].y
                    }
                }

                // //
                // const player = data[key]
                // this.game.playerArr[key] = this.game.add.sprite(0,0,'player')
                // this.game.playerArr[key].scale.setTo(.2)
            }

        })
        Client.socket.on('allPlayers',(data)=>{
            // console.log("this is the current connnectsion id", data)
            // console.log("shouting out from the all players recieveing socket",data)
            // this.game.playerArr[Object.keys(data)[0]] = this.game.add.sprite(0,0,'player')
            // this.game.playerArr[Object.keys(data)[0]].scale.setTo(0.2)
            // console.log("Thie is the socket ID", io.sockets.connected.id)

            
            for(key in Object.keys(data)){
                // console.log("this player is being painted", data)
                const player = data[key]
                this.game.playerArr[player] = this.game.add.sprite(0,0,'player')
                this.game.playerArr[player].scale.setTo(.2)
            }
        })
        if(this.upKey.isDown){
            Client.sendMovement("up")
            
        }
        if(this.downKey.isDown){
            Client.sendMovement("down")
        }
        if(this.leftKey.isDown){
            Client.sendMovement("left")
        }
        if(this.rightKey.isDown){
            Client.sendMovement("right")
        }
        Client.socket.on('playerPlacementUpdate',(data)=>{
            // console.log(" this is the player and thier position", data)
            const playerId = Object.keys(data)[0]
            this.game.playerArr[playerId].x = data[playerId].x
            this.game.playerArr[playerId].y = data[playerId].y
            // console.log("this is the current players values",this.game.playerArr[Object.keys(data)[0]])
            // console.log("===")
            // console.log('these are the corresponding obecjts on the game sate', this.game.playerArr[this.game.playerID].x)
           
        })
       
        // Client.socket.on('playerPlacementUpdate',function(data){
        //     //update this.player locatios 
        //     // this.player.x
            
        //     // console.log(" I want to change this ", this.playerArr[this.playerID])
        // })
    }
    // ,
    // hitfood: function(player,deadFood){
    //     this.deadFood.kill()
    // },
    // generateDeadFood: function(){
    //     this.deadFood = this.game.add.group()
    //     this.deadFood.enableBody = true; 
    //     this.deadFood.physicsBodyType = Phaser.Physics.ARCADE
    //     numDeadFood = this.game.rnd.integerInRange(150,200)
    //     var deadFood;
    //     for(var i= 0; i < numDeadFood;i++){
    //         deadFood = this.deadFood.create(this.game.world.randomX,this.game.world.randomY, 'player')
    //         deadFood.body.velocity.x = this.game.rnd.integerInRange(-20,20);
    //         deadFood.body.velocity.y = this.game.rnd.integerInRange(-20,20);
    //         deadFood.body.immovable = true; 
    //         deadFood.body.collideWorldBounds = true;
    //     }

    // }
}