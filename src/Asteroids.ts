// CORE
import Game from './core/Game';
import Scale from './core/Scale';
import Vector from './core/Vector';

// PHYSICS
// import SquareCollider from './physics/SquareCollider';

import Square from './Square';
import Square2 from './Square2';
import Settings from './Settings';

export default class Asteroids {

  public game: Game;

  public sqr: Square;
  public sqr2: Square2;

  constructor() {

    this.game = new Game(new Settings());

    this.sqr = new Square('sqr', new Scale(100, 100), new Vector(100, 100, 0));
    this.sqr2 = new Square2('sqr2', new Scale(100, 100), new Vector(100, 100, 0));
  }

  // public setup(): void {

  //   this.sqr.collider = new SquareCollider(this.sqr.scale, this.sqr.vector);
  // }

  public run(): void {

    this.game.instantiateObject(this.sqr, new Vector(0, (480 / 2) - 50, 0));
    this.game.instantiateObject(this.sqr2, new Vector(640 - 100, (480 / 2) - 50, 0));
  }
}

window.onload = () => {
  
  const game: Asteroids = new Asteroids();

  // game.setup();
  game.run();
};