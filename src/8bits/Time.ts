export default class Time {
  
  /**
   * Esta propriedade fornece o tempo entre o quadro atual e o anterior.
   *
   * @static
   * @type {number}
   * @memberof Time
   */
  public static deltaTime: number = 0;

  /**
   * Esta propriedade fornece a quantidade de frames por segundo
   *
   * @static
   * @type {number}
   * @memberof Time
   */
  public static frameRate: number = 0;

  /**
   *
   *
   * @static
   * @type {number}
   * @memberof Time
   */
  public static oldTimeStamp: number = 0;
  
  /**
   *
   *
   * @static
   * @memberof Time
   */
  public static computeDeltaTime(): void {
    
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
  public static computeFramePerSecond(): void {

    this.frameRate = Math.round(1 / this.deltaTime);
  }
} 