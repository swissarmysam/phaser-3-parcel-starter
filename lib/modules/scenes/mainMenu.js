/* *************** */
/* MAIN MENU SCENE */
/* *************** */
export default class menu extends Phaser.Scene {
  constructor() {
    super('menu');
  }

  create() {
    const startText = this.add.text(400, 300, 'START');
    startText.setInteractive({ userHandCursor: true });

    // on button click - fade screen to black - 500ms fade time
    startText.on('pointerdown', () => {
      this.cameras.main.fadeOut(500, 0, 0, 0);
    });

    // after fade event is completed - start the main game scene
    this.cameras.main.once(
      Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE,
      (cam, effect) => {
        this.scene.start('main-game');
      },
      this
    );
  }
}
