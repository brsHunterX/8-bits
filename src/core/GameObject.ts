import Scale from './Scale';
import Vector from './Vector';

export default abstract class GameObject {

  /**
   * 
   * @param tag 
   * @param vector 
   * @param scale 
   */
  constructor(
    public tag: string = '',
    public scale: Scale = new Scale(0, 0),
    public vector: Vector = new Vector(0, 0, 0),
  ) { }
  
  /**
   * 
   * @param context 
   */
  public render(context: CanvasRenderingContext2D): void {}

  /**
   * 
   * @param deltaTime 
   */
  public update(deltaTime: number): void { }
}