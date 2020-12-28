/* ******************* */
/* SPLASH SCREEN SCENE */
/* ******************* */
export default class splash extends Phaser.Scene {
  constructor() {
    super('splash');
  }

  preload() {
    this.load.image('splash', 'url here');
  }

  create() {
    this.add.image(400, 300, 'splash');
    setTimeout(() => {
      this.scene.start('loader');
    }, 2000); // set time for how long splash should show before going into loading screen
  }
}
