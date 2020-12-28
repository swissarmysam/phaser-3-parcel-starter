import Phaser from 'phaser';
import splash from './scenes/splashScreen';
import loader from './scenes/loadScreen';
import menu from './scenes/mainMenu';
import main from './scenes/mainGame';

export const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: [splash, loader, menu, main],
};
