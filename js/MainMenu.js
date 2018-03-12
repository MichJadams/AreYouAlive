AreYouAlive = AreYouAlive || {} 
AreYouAlive.MainMenu = function(){} 

AreYouAlive.MainMenu.prototype ={
 
    create: function(){

        this.background = this.game.add.tileSprite(0,0,this.game.width,this.game.height, 'waterTile')
        
        // this.background.scale.setTo(0.5)
        this.background.autoScroll(-20,0);
        var cheesy = "The Internet is a dangerous place,\n practice here to determine who is real \nand who is just a catfish"
        var text = "Do you want to be a fish (press f), or a cat (press c)?"
        var style = {font: "30px Arial", fill: "#fff", align: "center"}
        this.game.isCat = false 
        var t = this.game.add.text(this.game.width/2,this.game.height/2,text,style)
        t.anchor.set(0.5)
        var c = this.game.add.text(this.game.width/4,this.game.height/4,cheesy,style)
        // c.anchor.set(0.5)

        // this.game.testing = "hey, testing"
        this.spaceKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
        this.cKey = this.input.keyboard.addKey(Phaser.Keyboard.C)
        this.fKey = this.input.keyboard.addKey(Phaser.Keyboard.F)



    },
    update: function(){
        if(this.cKey.isDown){
            this.game.isCat = true 
            this.game.state.start('WaitingRoom')
        }
        if(this.fKey.isDown){
            this.game.isCat = false 
            this.game.state.start('WaitingRoom')
        }
        if(this.spaceKey.isDown){
            this.game.state.start('WaitingRoom')
        }
    }
}