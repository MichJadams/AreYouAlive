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
    },
    update:  function(){
        if(this.upKey.isDown){
            console.log("up")
            Client.sendMovement("up")
        }
        if(this.downKey.isDown){
            console.log("down")
            Client.sendMovement("down")
        }
        if(this.leftKey.isDown){
            console.log("left")
            Client.sendMovement("left")
        }
        if(this.rightKey.isDown){
            console.log("right")
            Client.sendMovement("right")
        }
    }
}