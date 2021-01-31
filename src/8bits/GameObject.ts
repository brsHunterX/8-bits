import { v4 as uuidv4 } from 'uuid';

import Engine from './Engine';
import Transform from './Transform';

/**
 *
 *
 * @export
 * @class GameObject
 */
export default class GameObject {

  /**
   * UUID da instancia
   *
   * @private
   * @type {string}
   * @memberof GameObject
   */
  private uuid: string = uuidv4();
  
  /**
   * Creates an instance of GameObject.
   * @param {string} [tag='']
   * @param {Transform} [transform=new Transform()]
   * @memberof GameObject
   */
  constructor(
    public tag: string = '',
    public transform: Transform = new Transform(),
  ) {}

  /**
   * Cria uma nova instancia de GameObject
   *
   * @static
   * @param {GameObject} gameObject
   * @param {Transform} [transform]
   * @memberof GameObject
   */
  public static instantiate(gameObject: GameObject, transform?: Transform) {
    
    if (transform) {
      gameObject.transform = transform;
    }

    Engine.gameObjects.push(gameObject);
  }

  /**
   * Destrói uma instancia de GameObject
   *
   * @static
   * @param {GameObject} gameObject
   * @param {number} [delay]
   * @memberof GameObject
   */
  public static destroy(gameObject: GameObject, delay?: number) {

    Engine.gameObjects = Engine.gameObjects.filter((object: GameObject) => {
      return object.getUUID() !== gameObject.getUUID();
    });
  }

  /**
   * Retorna o UUID da instancia
   *
   * @return {*}  {string}
   * @memberof GameObject
   */
  public getUUID(): string {
    return this.uuid
  }

  /**
   *
   *
   * @memberof GameObject
   */
  public render(): void {}

  /**
   *
   *
   * @memberof GameObject
   */
  public update(): void {}
}