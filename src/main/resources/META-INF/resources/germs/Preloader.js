export default class Preloader extends Phaser.Scene
{
    constructor ()
    {
        super('Preloader');
    }

    preload ()
    {
        this.add.image(400, 300, 'background').setScale(2);

        this.loadText = this.add.bitmapText(400, 300, 'slime', 'Loading ...', 80).setOrigin(0.5);

        this.load.setPath('assets/games/rvr/');
        this.load.atlas('assets', 'rvr.png', 'rvr.json');
        this.load.glsl('goo', 'goo.glsl.js');

        //  Audio ...
        this.load.setPath('assets/games/rvr/sounds/');

        this.load.audio('appear', [ 'appear.ogg', 'appear.m4a', 'appear.mp3' ]);
        this.load.audio('fail', [ 'fail.ogg', 'fail.m4a', 'fail.mp3' ]);
        this.load.audio('laugh', [ 'laugh.ogg', 'laugh.m4a', 'laugh.mp3' ]);
        this.load.audio('music', [ 'music.ogg', 'music.m4a', 'music.mp3' ]);
        this.load.audio('pickup', [ 'pickup.ogg', 'pickup.m4a', 'pickup.mp3' ]);
        this.load.audio('start', [ 'start.ogg', 'start.m4a', 'start.mp3' ]);
        this.load.audio('victory', [ 'victory.ogg', 'victory.m4a', 'victory.mp3' ]);
    }

    create ()
    {
        //  Create our global animations
        
        this.anims.create({
            key: 'whammy1',
            frames: this.anims.generateFrameNames('assets', { prefix: 'whammy', start: 1, end: 2 }),
            frameRate: 8,
            repeat: -1
        });

        this.anims.create({
            key: 'whammy2',
            frames: this.anims.generateFrameNames('assets', { prefix: 'whammy', start: 1, end: 2 }),
            frameRate: 8,
            repeat: -1
        });

        this.anims.create({
            key: 'whammy3',
            frames: this.anims.generateFrameNames('assets', { prefix: 'whammy', start: 1, end: 2 }),
            frameRate: 8,
            repeat: -1
        });

        this.anims.create({
            key: 'whammy4',
            frames: this.anims.generateFrameNames('assets', { prefix: 'whammy', start: 1, end: 2 }),
            frameRate: 8,
            repeat: -1
        });


        if (this.sound.locked)
        {
            this.loadText.setText('Click to Start');

            this.input.once('pointerdown', () => {

                this.scene.start('MainMenu');

            });
        }
        else
        {
            this.scene.start('MainMenu');
        }
    }
}
