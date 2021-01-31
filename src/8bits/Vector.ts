/**
 *
 *
 * @export
 * @class Vector
 */
export default class Vector {

  /**
   * Creates an instance of Vector.
   * @param {number} [x=0]
   * @param {number} [y=0]
   * @memberof Vector
   */
  constructor(
    public x: number = 0,
    public y: number = 0,
  ) {}

  /**
   *
   *
   * @readonly
   * @static
   * @type {Vector}
   * @memberof Vector
   */
  public static get zero(): Vector {
    
    return new Vector(0, 0);
  }

  /**
   *
   *
   * @static
   * @param {Vector} vectorA
   * @param {Vector} vectorB
   * @return {*} 
   * @memberof Vector
   */
  public static distance(vectorA: Vector, vectorB: Vector) {
    
    const a: number = vectorA.x - vectorB.x;
    const b: number = vectorA.y - vectorB.y;

    return Math.sqrt(a * a + b * b);
  }
}