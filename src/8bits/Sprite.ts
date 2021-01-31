import Vector from './Vector';

export default class Sprite {
  private scale: number = 1;
  private opacity: number = 1;
  private anchor: Vector = new Vector(0, 0);
  private vector: Vector = new Vector(0, 0);
}