import GameObject from './core/GameObject';
import SpriteSheet from './core/SpriteSheet';

export default class Square extends GameObject {

  /**
   *
   *
   * @private
   * @type {HTMLImageElement}
   * @memberof Square
   */
  private charSpriteSheet: SpriteSheet; 
  private appleSpriteSheet: SpriteSheet; 
  private bananaSpriteSheet: SpriteSheet; 
  
  /**
   * Creates an instance of Square.
   * @memberof Square
   */
  constructor() {
    super();

    this.charSpriteSheet = new SpriteSheet('../assets/images/char.png', 32, 32);
    this.appleSpriteSheet = new SpriteSheet('../assets/images/apple.png', 32, 32);
    this.bananaSpriteSheet = new SpriteSheet('../assets/images/banana.png', 32, 32);
  }
  
  /**
   *
   *
   * @param {CanvasRenderingContext2D} context
   * @memberof Square
   */
  public render(context: CanvasRenderingContext2D): void {
    
    context.imageSmoothingEnabled = false;
    
    this.charSpriteSheet.animate(context, 0, 64);
    this.appleSpriteSheet.animate(context, 32, 64);
    this.bananaSpriteSheet.animate(context, 64, 64);
    // this.charSpriteSheet.drawFrame(context, 1, 32, 0);
    // this.charSpriteSheet.drawFrame(context, 2, 64, 0);
    // this.charSpriteSheet.drawFrame(context, 3, 96, 0);
  }

  /**
   *
   *
   * @param {number} deltaTime
   * @memberof Square
   */
  public update(deltaTime: number): void {

  }
}