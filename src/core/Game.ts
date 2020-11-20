import Vector from './Vector';
import GameObject from './GameObject';
import GameSettings from './GameSettings';
// import GameAssets from '../assets/GameAssets';

/**
 *
 *
 * @export
 * @class Game
 */
export default class Game {

  /**
   *
   *
   * @type {HTMLElement}
   * @memberof Game
   */
  public target!: HTMLElement;
  
  /**
   *
   *
   * @type {HTMLCanvasElement}
   * @memberof Game
   */
  public canvas!: HTMLCanvasElement;

  /**
   *
   *
   * @type {CanvasRenderingContext2D}
   * @memberof Game
   */
  public context!: CanvasRenderingContext2D;

  /**
   *
   *
   * @type {number}
   * @memberof Game
   */
  public fps: number = 0;

  /**
   *
   *
   * @type {number}
   * @memberof Game
   */
  public deltaTime: number = 0;

  /**
   *
   *
   * @type {number}
   * @memberof Game
   */
  public oldTimeStamp: number = 0;

  // /**
  //  *
  //  *
  //  * @type {GameAssets}
  //  * @memberof Game
  //  */
  // public assets: GameAssets = new GameAssets();
  
  /**
   *
   *
   * @type {GameObject[]}
   * @memberof Game
   */
  public gameObjects: GameObject[] = [];
  
  /**
   * Creates an instance of Game.
   * @param {GameSettings} settings
   * @memberof Game
   */
  constructor(
    public settings: GameSettings,
  ) {

    this._createCanvas();
    this._resizeCanvas();
    
    if (this.settings.gameCanvasMarkEdges) {
      
      this._markEdges();
    }

    window.requestAnimationFrame(() => this._update());
  }

  /**
   *
   *
   * @private
   * @memberof Game
   */
  private _createCanvas(): void {

    this.target = document.getElementById(this.settings.gameTarget) as HTMLElement;

    this.canvas = document.createElement('canvas') as HTMLCanvasElement;
    this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;

    this.target.appendChild(this.canvas);
  }

  /**
   *
   *
   * @private
   * @memberof Game
   */
  private _resizeCanvas() {

    this.canvas.width = this.settings.gameCanvasWidth;
    this.canvas.height = this.settings.gameCanvasHeight;
  }
  
  /**
   *
   *
   * @private
   * @memberof Game
   */
  private _markEdges() {

    this.canvas.style.borderWidth = '1px';
    this.canvas.style.borderStyle = 'solid';
    this.canvas.style.borderColor = '#000000';
  }

  /**
   *
   *
   * @private
   * @memberof Game
   */
  private _computeDeltaTime(): void {

    const oldTimeStamp: number = performance.now();
    
    this.deltaTime = (oldTimeStamp - this.oldTimeStamp) / 1000;
    
    this.oldTimeStamp = oldTimeStamp;
  }

  /**
   *
   *
   * @private
   * @memberof Game
   */
  private _computeFramePerSecond(): void {

    this.fps = Math.round(1 / this.deltaTime);
  }

  /**
   *
   *
   * @private
   * @param {number} fps
   * @memberof Game
   */
  private _renderFPS(fps: number): void {

    this.context.font = '16px Arial';
    this.context.fillStyle = 'black';
    this.context.fillText(`FPS: ${fps}`, 10, 30);
  }

  /**
   *
   *
   * @private
   * @memberof Game
   */
  private _clean(): void {

    this.context.clearRect(
      0, 0,
      this.settings.gameCanvasWidth,
      this.settings.gameCanvasHeight
    );
  }

  /**
   *
   *
   * @private
   * @memberof Game
   */
  private _render(): void {

    this._clean();

    if (this.settings.gameDebugFPS) {

      this._renderFPS(this.fps);
    }

    this.gameObjects.forEach((gameObject: GameObject) => {
      
      gameObject.render(this.context);
    });
  }

  /**
   *
   *
   * @private
   * @memberof Game
   */
  private _updateGameObjects(): void {

    this.gameObjects.forEach((gameObject: GameObject) => {
      
      gameObject.update(this.deltaTime);
    });
  }

 /**
  *
  *
  * @private
  * @memberof Game
  */
 private _update(): void {

    this._computeDeltaTime();
    this._computeFramePerSecond();

    this._render();
    this._updateGameObjects();

    window.requestAnimationFrame(() => this._update());
  }

  /**
   *
   *
   * @param {GameObject} gameObject
   * @return {*}  {boolean}
   * @memberof Game
   */
  public existsGameObject(gameObject: GameObject): boolean {

    const gameObjects: GameObject[] = this.gameObjects.filter((object: GameObject) => {
      
      return object.tag === gameObject.tag;
    });

    return (gameObjects.length > 0) ? true : false;
  }

  /**
   *
   *
   * @param {GameObject} gameObject
   * @param {Vector} [position]
   * @memberof Game
   */
  public instantiateObject(gameObject: GameObject, position?: Vector): void {

    if (! this.existsGameObject(gameObject)) {

      if (position) {
        gameObject.vector = position;
      }

      this.gameObjects.push(gameObject);
    }
  }

  /**
   *
   *
   * @param {GameObject} gameObject
   * @memberof Game
   */
  public destroyObject(gameObject: GameObject): void {

    this.gameObjects = this.gameObjects.filter((object: GameObject) => {
      
      return object.tag !== gameObject.tag;
    });
  }
}