AreYouAlive = AreYouAlive || {} 
AreYouAlive.WaitingRoom = function(){} 

AreYouAlive.WaitingRoom.prototype ={
 
    create: function(){

        this.background = this.game.add.tileSprite(0,0,this.game.width,this.game.height, 'waterTile')
        
        // this.background.scale.setTo(0.5)
        this.background.autoScroll(-20,0);

        var text = "This is the waiting room, \n the game will start once a friend comes along. \nAs a fish there are a few rules"
        var style = {font: "30px Arial", fill: "#C0C0C0", align: "center"}
        var explanation = "1. Don't go outside the boundires\n or you will be bounced back to the middle and \n the cat will SEE YOU"
        var moreExp = "2. Try and act like the other fish,\n so the cat doesn't SEE YOU"
        var t = this.game.add.text(175,100,text,style)
        var e = this.game.add.text(300,250,explanation,style)
        var m = this.game.add.text(300,400,moreExp,style)
        // t.anchor.set(0.5)
        // e.anchor.set(0.5)
        // m.anchor.set(0.5)

        
        // this.spaceKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
        // this.cKey = this.input.keyboard.addKey(Phaser.Keyboard.C)
        // this.fKey = this.input.keyboard.addKey(Phaser.Keyboard.F)



        Client.playerJoined()
    },
    update: function(){
        Client.socket.on("startGame",()=>{
            this.state.start('Game')
        })
        // if(this.cKey.isDown){
        //     this.game.isCat = true 
        // }
        // if(this.fKey.isDown){
        //     this.game.isCat = false 
        //     this.game.state.start('Game')
        // }
        // if(this.spaceKey.isDown){
        //     this.game.state.start('Game')
        }
    // }
}