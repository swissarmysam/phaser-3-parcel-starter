/* ************* */
/* LOADING SCENE */
/* ************* */
export default class loader extends Phaser.Scene {
  constructor() {
    super('loader');
  }

  preload() {
    /* SETUP FOR LOADING SCREEN GRAPHICS */
    /* THANKS TO PATCHESOFT FOR THE TUTORIAL ON THIS https://www.patchesoft.com/ */
    this.graphics = this.add.graphics();
    this.newGraphics = this.add.graphics();
    const progressBar = new Phaser.Geom.Rectangle(200, 200, 400, 50);
    const progressBarFill = new Phaser.Geom.Rectangle(205, 205, 290, 40);

    this.graphics.fillStyle(0xcdcdcd, 1);
    this.graphics.fillRectShape(progressBar);

    this.newGraphics.fillStyle(0x333333, 1);
    this.newGraphics.fillRectShape(progressBarFill);

    const loadingText = this.add.text(250, 260, 'Loading ... ', {
      fontSize: '24px',
      fill: '#FFF',
    });
    /* END */

    /* PRELOAD ASSETS INTO MEMORY */
    // set base URL for assets - I use cloudinary CDN
    this.load.setBaseURL('http://labs.phaser.io');

    // load all required assets here
    this.load.image('sky', 'assets/skies/space3.png');
    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    this.load.image('red', 'assets/particles/red.png');
    /* END */

    /* UPDATE PROGRESS BAR AND INVOKE COMPLETE ON EVENT */
    this.load.on('progress', this.updateBar, {
      newGraphics: this.newGraphics,
      loadingText,
    });
    this.load.on('complete', this.complete, { scene: this.scene });
    /* END */
  }

  updateBar(percentage) {
    this.newGraphics.clear();
    this.newGraphics.fillStyle(0x333333, 1);
    this.newGraphics.fillRectShape(
      new Phaser.Geom.Rectangle(205, 205, percentage * 390, 40)
    );

    percentage *= 100;
    this.loadingText.setText(`Loading: ${percentage.toFixed(2)}%`);
    console.log(`P:${percentage}`);
  }

  complete() {
    this.scene.start('menu');
    console.log('COMPLETE');
  }
}
