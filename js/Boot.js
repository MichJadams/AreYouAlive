var AreYouAlive = AreYouAlive || {} 

AreYouAlive.Boot = function(){}

AreYouAlive.Boot.prototype ={
    preload: function(){
        console.log(this.load)
        this.load.image('logo', '/assests/logo.svg')
    },
    create: function(){
        this.game.stage.backgroundColor = '#C0C0C0'

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.minWidth = 240; 
        this.scale.minHeight = 170; 
        this.scale.maxWidth = 2880;
        this.scale.maxHeight = 1920;

        this.scale.pageAlignHorizontally = true; 

        // this.scale.setScreenSize(true);
        // console.log(this.game)
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        this.state.start('Preload')
    }
}