// CORE
import Game from './core/Game';
import Scale from './core/Scale';
import Vector from './core/Vector';
import Settings from './Settings';

import Square from './Square';

export default class Project {

  public game: Game;
  public settings: Settings;

  public sqr: Square;

  constructor() {

    this.settings = new Settings();
    
    this.game = new Game(this.settings);

    this.sqr = new Square();
  }

  public run(): void {

    this.game.instantiateObject(this.sqr, new Vector(0, (480 / 2) - 50, 0));
  }
}

window.onload = () => {
  
  const game: Project = new Project();

  game.run();
};