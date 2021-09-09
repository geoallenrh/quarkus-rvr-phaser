import Germ from './Germ.js';

export default class Germs extends Phaser.Physics.Arcade.Group
{
    constructor (world, scene)
    {
        super(world, scene);

        this.classType = Germ;

        this.germConfig = [
            { animation: 'whammy1', speed: 60 },
            { animation: 'whammy2', speed: 90 },
            { animation: 'whammy3', speed: 120 },
            { animation: 'whammy4', speed: 180 }
        ];
    }

    start ()
    {
        let whammy1 = new Germ(this.scene, 100, 100, 'whammy1');
        let whammy2 = new Germ(this.scene, 700, 600, 'whammy1');
        let whammy3 = new Germ(this.scene, 200, 400, 'whammy1');

        this.add(whammy1, true);
        this.add(whammy2, true);
        this.add(whammy3, true);

        whammy1.start(1000);
        whammy2.start(2000);
        whammy3.start();

        this.timedEvent = this.scene.time.addEvent({ delay: 2000, callback: this.releaseGerm, callbackScope: this, loop: true });
    }

    stop ()
    {
        this.timedEvent.remove();

        this.getChildren().forEach((child) => {

            child.stop();

        });
    }

    releaseGerm ()
    {
        const x = Phaser.Math.RND.between(0, 800);
        const y = Phaser.Math.RND.between(0, 600);

        let whammy;

        let config = Phaser.Math.RND.pick(this.germConfig);

        this.getChildren().forEach((child) => {

            if (child.anims.name === config.animation && !child.active)
            {
                //  We found a dead matching germ, so resurrect it
                whammy = child;
            }

        });

        if (whammy)
        {
            whammy.restart(x, y);
        }
        else
        {
            whammy = new Germ(this.scene, x, y, config.animation, config.speed);

            this.add(whammy, true);

            whammy.start();
        }
    }
}
