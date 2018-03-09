AreYouAlive = AreYouAlive || {} 
AreYouAlive.Preload = function(){} 

AreYouAlive.Preload.prototype ={
    preload: function(){
        this.splash = this.add.sprite(this.game.world.centerX,this.game.world.centerY, 'logo')
        this.splash.anchor.setTo(0.5)

        this.load.image('player', 'assests/player.svg')
        this.load.image('waterTile','assests/waterTile.svg')
       
       
    },
    create: function(){
        this.state.start('MainMenu')
    }
}
