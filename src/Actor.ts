import Canvas from './8bits/Canvas';
import GameObject from './8bits/GameObject';
import Time from './8bits/Time';

export default class Actor extends GameObject {
  
  constructor() {
    super();
    
    this.transform.position.x = 10;
    this.transform.position.y = 40;
    this.transform.scale.width = 50;
    this.transform.scale.height = 50;
  }

  public render(): void {
    super.render();

    Canvas.drawRect(this.transform.position, this.transform.scale);
  }

  public update(): void {
    super.update();

    this.transform.position.x += 10 * Time.deltaTime;
  }
}