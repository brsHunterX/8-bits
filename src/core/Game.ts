import Vector from './Vector';
import GameObject from './GameObject';
import GameSettings from './GameSettings';

export default class Game {

  // CANVAS

  public target!: HTMLElement;
  public canvas!: HTMLCanvasElement;
  public context!: CanvasRenderingContext2D;

  // GAME LOOP

  public fps: number = 0;
  public deltaTime: number = 0;
  public oldTimeStamp: number = 0;

  
  // OBJECTS
  
  public gameObjects: GameObject[] = [];
  
  /**
   * 
   * @param settings 
   */
  constructor(
    public settings: GameSettings = new GameSettings(),
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
   */
  private _createCanvas(): void {

    this.target = document.getElementById(this.settings.gameTarget) as HTMLElement;

    this.canvas = document.createElement('canvas') as HTMLCanvasElement;
    this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;

    this.target.appendChild(this.canvas);
  }

  /**
   * 
   */
  private _resizeCanvas() {

    this.canvas.width = this.settings.gameCanvasWidth;
    this.canvas.height = this.settings.gameCanvasHeight;
  }
  
  /**
   * 
   */
  private _markEdges() {

    this.canvas.style.borderWidth = '1px';
    this.canvas.style.borderStyle = 'solid';
    this.canvas.style.borderColor = '#000000';
  }

  /**
   * 
   */
  private _computeDeltaTime(): void {

    const oldTimeStamp: number = performance.now();
    
    this.deltaTime = (oldTimeStamp - this.oldTimeStamp) / 1000;
    
    this.oldTimeStamp = oldTimeStamp;
  }

  /**
   * 
   */ 
  private _computeFramePerSecond(): void {

    this.fps = Math.round(1 / this.deltaTime);
  }

  /**
   * 
   * @param fps 
   */
  private _renderFPS(fps: number): void {

    this.context.font = '16px Arial';
    this.context.fillStyle = 'black';
    this.context.fillText(`FPS: ${fps}`, 10, 30);
  }

  /**
   * 
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
   */
  private _updateGameObjects(): void {

    this.gameObjects.forEach((gameObject: GameObject) => {
      
      gameObject.update(this.deltaTime);
    });
  }

  private _detectCollision() {

    this.gameObjects.forEach((objectA: GameObject) => {

      console.log(objectA);

      this.gameObjects.forEach((objectB: GameObject) => {

        console.log(objectB);
      });
    });
  }

  /**
   * 
   */
  private _update(): void {

    this._computeDeltaTime();
    this._computeFramePerSecond();

    this._render();
    this._updateGameObjects();

    this._detectCollision();

    window.requestAnimationFrame(() => this._update());
  }

  /**
   * 
   * @param gameObject 
   */
  public existsGameObject(gameObject: GameObject): boolean {

    const gameObjects: GameObject[] = this.gameObjects.filter((object: GameObject) => {
      
      return object.tag === gameObject.tag;
    });

    return (gameObjects.length > 0) ? true : false;
  }

  /**
   * 
   * @param gameObject 
   * @param position 
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
   * @param gameObject 
   */
  public destroyObject(gameObject: GameObject): void {

    this.gameObjects = this.gameObjects.filter((object: GameObject) => {
      
      return object.tag !== gameObject.tag;
    });
  }
}