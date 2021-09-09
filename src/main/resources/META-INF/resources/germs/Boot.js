export default class Boot extends Phaser.Scene
{
    constructor ()
    {
        super('Boot');
    }

    preload ()
    {
        this.load.setPath('assets/games/rvr/');
        this.load.image('background', 'background.jpg');
        this.load.bitmapFont('slime', 'slime-font.png', 'slime-font.xml');
    }

    create ()
    {
        this.registry.set('highscore', 0);

        this.scene.start('Preloader');
    }
}
