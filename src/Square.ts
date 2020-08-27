import Vector from './core/Vector';
import Scale from './core/Scale';
import GameObject from './core/GameObject';

export default class Square extends GameObject {

  private _speed = 100;
  private _direction = 1;

  public render(context: CanvasRenderingContext2D): void {
    
    context.fillStyle = '#0082F1';
    
    context.beginPath();
    context.fillRect(this.vector.x, this.vector.y, this.scale.width, this.scale.height);
    context.closePath();
  }

  public update(deltaTime: number): void {

    if (this.vector.x <= 0) {
      this._direction = 1;
    }
    
    if ((this.vector.x + this.scale.width) >= 640) {
      this._direction = -1;
    }

    this.vector.x += (this._speed * deltaTime) * this._direction;
  }
}