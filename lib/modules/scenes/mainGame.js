/* *************** */
/* MAIN MENU SCENE */
/* *************** */

export default class main extends Phaser.Scene {
  constructor() {
    super('main-game');
  }

  create() {
    // fade in the main-game scene in
    this.cameras.main.fadeIn(500, 0, 0, 0);

    // set up game stage
    this.add.image(400, 300, 'sky');

    const particles = this.add.particles('red');

    const emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD',
    });

    const logo = this.physics.add.image(400, 100, 'logo');

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);
  }
}
