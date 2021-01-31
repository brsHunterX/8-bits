/**
 *
 *
 * @export
 * @class Scale
 */
export default class Scale {
  
  /**
   * Creates an instance of Scale.
   * @param {number} [width=0]
   * @param {number} [height=0]
   * @memberof Scale
   */
  constructor(
    public width: number = 0,
    public height: number = 0,
  ) {}
  
  /**
   *
   *
   * @readonly
   * @static
   * @type {Scale}
   * @memberof Scale
   */
  public static get zero(): Scale {
    
    return new Scale(0, 0);
  }
}