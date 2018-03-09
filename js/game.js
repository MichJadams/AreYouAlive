AreYouAlive = AreYouAlive || {} 
AreYouAlive.Game = function(){}

AreYouAlive.Game={
    create: function(){
        this.game.world.setBounds(0,0,1920,1920)
        this.background = this.game.add.tileSprite(0, 0,
            this.game.world.width, this.game.world.height, 'waterTile')
            this.playerArr = {}

            // this.playerArr[1] = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'player')
            // console.log("player instance!",this.playerArr[1])
            
            // this.playerArr[1].scale.setTo(0.5)
            
            this.upKey = this.input.keyboard.addKey(Phaser.Keyboard.W);
            this.downKey = this.input.keyboard.addKey(Phaser.Keyboard.S);
            this.leftKey = this.input.keyboard.addKey(Phaser.Keyboard.D);
            this.rightKey = this.input.keyboard.addKey(Phaser.Keyboard.A);
            
            this.playerID = 0
            console.log("this is loading information from the game main menu", this.game.isCat)
            this.addNewPlayer = (id,x,y,isCat)=>{
                this.playerArr[id] = this.game.add.sprite(x,y,'player')
                this.playerArr[id].isCat = isCat
                this.playerArr[id].scale.setTo(0.2)
                this.playerID = id 
                console.log("the array of players is ", this.playerArr[this.playerID])
            }
            // console.log("the player id is ", this.playerID)
    
            Client.createNewPlayer(this.game.isCat)
        
        
    },
    update:  function(){
        console.log("thie players id is ", this.playerID)
        console.log("the arrya of players is", this.playerArr[this.playerID])
        // console.log("is cat?", isCat)
        if(this.upKey.isDown){
            const Cat = this.playerArr[this.playerID].isCat
            console.log("up")
            this.playerArr[this.playerID].y -=10
            Client.sendMovement("up",this.playerArr[this.playerID].x,
            this.playerArr[this.playerID].y, 
            this.playerID,
            Cat )
        }
        if(this.downKey.isDown){
            const Cat = this.playerArr[this.playerID].isCat
            console.log("down")
            this.playerArr[this.playerID].y +=10
            Client.sendMovement("down",this.playerArr[this.playerID].x,
            this.playerArr[this.playerID].y, 
            this.playerID,
            Cat )
        }
        if(this.leftKey.isDown){
            const Cat = this.playerArr[this.playerID].isCat
            console.log("left")
            this.playerArr[this.playerID].x +=10
            Client.sendMovement("left",this.playerArr[this.playerID].x,
            this.playerArr[this.playerID].y,
            this.playerID,
            Cat )
        }
        if(this.rightKey.isDown){
            const Cat = this.playerArr[this.playerID].isCat
            console.log("right")
            this.playerArr[this.playerID].x -=10
            Client.sendMovement("right",this.playerArr[this.playerID].x,
            this.playerArr[this.playerID].y,
            this.playerID,
            Cat )
        }
        // this.game.phsyics.arcade.collide(this.player,this.deadFood,this.hitFood, null, this)
    
    },
    hitfood: function(player,deadFood){
        this.deadFood.kill()
    },
    generateDeadFood: function(){
        this.deadFood = this.game.add.group()
        this.deadFood.enableBody = true; 
        this.deadFood.physicsBodyType = Phaser.Physics.ARCADE
        numDeadFood = this.game.rnd.integerInRange(150,200)
        var deadFood;
        for(var i= 0; i < numDeadFood;i++){
            deadFood = this.deadFood.create(this.game.world.randomX,this.game.world.randomY, 'player')
            deadFood.body.velocity.x = this.game.rnd.integerInRange(-20,20);
            deadFood.body.velocity.y = this.game.rnd.integerInRange(-20,20);
            deadFood.body.immovable = true; 
            deadFood.body.collideWorldBounds = true;
        }

    }
}