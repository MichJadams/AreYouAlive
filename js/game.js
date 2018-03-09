AreYouAlive = AreYouAlive || {} 
AreYouAlive.Game = function(){}

AreYouAlive.Game.prototype ={
    create: function(){
        this.game.world.setBounds(0,0,1920,1920)
        this.background = this.game.add.tileSprite(0, 0,
            this.game.world.width, this.game.world.height, 'waterTile')

        this.player = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'player')
        
        this.upKey = this.input.keyboard.addKey(Phaser.Keyboard.W);
        this.downKey = this.input.keyboard.addKey(Phaser.Keyboard.S);
        this.leftKey = this.input.keyboard.addKey(Phaser.Keyboard.D);
        this.rightKey = this.input.keyboard.addKey(Phaser.Keyboard.A);

        Client.createNewPlayer()
        console.log("thie players current location is ", this.player.x , this.player.y)
    },
    update:  function(){
        if(this.upKey.isDown){
            console.log("up")
            Client.sendMovement("up",this.player.x,this.player.y )
            this.player.x +=10
            console.log("thie players current location is ", this.player.x , this.player.y)
        }
        if(this.downKey.isDown){
            console.log("down")
            Client.sendMovement("down",this.player.x,this.player.y )
        }
        if(this.leftKey.isDown){
            console.log("left")
            Client.sendMovement("left",this.player.x,this.player.y )
        }
        if(this.rightKey.isDown){
            console.log("right")
            Client.sendMovement("right",this.player.x,this.player.y )
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