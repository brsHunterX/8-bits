import GameSettings from './core/GameSettings';

export default class Settings extends GameSettings {

  constructor() {
    
    super();

    this.gameName = 'Asteroids';
    this.gameEnvrioment = 'development';
  }
}