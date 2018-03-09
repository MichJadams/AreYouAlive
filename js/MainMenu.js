AreYouAlive = AreYouAlive || {} 
AreYouAlive.MainMenu = function(){} 

AreYouAlive.MainMenu.prototype ={
 
    create: function(){

        this.background = this.game.add.tileSprite(0,0,this.game.width,this.game.height, 'waterTile')
        
        // this.background.scale.setTo(0.5)
        this.background.autoScroll(-20,0);

        var text = "press space to start"
        var style = {font: "30px Arial", fill: "#fff", align: "center"}

        var t = this.game.add.text(this.game.width/2,this.game.height/2,text,style)
        t.anchor.set(0.5)

        this.spaceKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
    },
    update: function(){
        if(this.spaceKey.isDown){
            this.game.state.start('Game')
        }
    }
}