var AreYouAlive = AreYouAlive||{};

AreYouAlive.game = new Phaser.Game(window.innerWidth,
window.innerHeight, Phaser.AUTO, '');

AreYouAlive.game.state.add('Boot', AreYouAlive.Boot);
 //uncomment these as I create them through the tutorial
console.log("jkfdsjlak", AreYouAlive.game)
 AreYouAlive.game.state.add('Preload',AreYouAlive.Preload);
AreYouAlive.game.state.add('MainMenu',AreYouAlive.MainMenu);
AreYouAlive.game.state.add('Game', AreYouAlive.Game);

AreYouAlive.game.state.start('Boot');