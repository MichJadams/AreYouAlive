AreYouAlive = AreYouAlive || {} 
AreYouAlive.GameOver = function(){} 

AreYouAlive.GameOver.prototype ={
 
    create: function(){

        this.background = this.game.add.tileSprite(0,0,this.game.width,this.game.height, 'waterTile')
        
        // this.background.scale.setTo(0.5)
        this.background.autoScroll(-20,0);
        console.log("this winnder is", this.game.winner)
        if(this.game.winner){
            var text = "You got clicked, better luck next time, the cat wins"

        }else{
            var text = "You got clicked, better luck next time, the fish wins"
        }
        var style = {font: "30px Arial", fill: "#fff", align: "center"}
        this.game.isCat = false 
        var t = this.game.add.text(this.game.width/2,this.game.height/2,text,style)
        t.anchor.set(0.5)
    },
    update: function(){
        
        // if(this.cKey.isDown){
        //     this.game.isCat = true 
        //     this.game.state.start('Game')
        // }
        // if(this.fKey.isDown){
        //     this.game.isCat = false 
        //     this.game.state.start('Game')
        // }
        // if(this.spaceKey.isDown){
        //     this.game.state.start('Game')
        // }
    }
}