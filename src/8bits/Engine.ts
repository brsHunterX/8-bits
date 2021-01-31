import Canvas from "./Canvas";
import GameObject from "./GameObject";
import Time from "./Time";

/**
 *
 *
 * @export
 * @class Engine
 */
export default class Engine {

  /**
   * Essa propriedade retorna todos os GameObjects intanciados no jogo
   *
   * @static
   * @type {GameObject[]}
   * @memberof Engine
   */
  public static gameObjects: GameObject[] = [];

  /**
   * Creates an instance of Engine.
   * @memberof Engine
   */
  constructor() {

    Canvas.draw();
    
    window.requestAnimationFrame(() => this.update());
  }

  /**
   * Essa função é chamada para desenhar os GameObjects
   * a cada quadro
   *
   * @private
   * @memberof Engine
   */
  private renderGameObjects(): void  {

    Engine.gameObjects.forEach((gameObject: GameObject) => {
      gameObject.render();
    });
  }

  /**
   * Essa função é chamada para atualizar os GameObjects
   * a cada quadro
   *
   * @private
   * @memberof Engine
   */
  private updateGameObjects(): void  {

    Engine.gameObjects.forEach((gameObject: GameObject) => {
      gameObject.update();
    });
  }

  /**
   * Essa função é chamada para desenhar a cada atualização de quadros
   *
   * @private
   * @memberof Engine
   */
  private render(): void {
    
    Canvas.clean();
    
    this.renderGameObjects();
  }

  /**
   * Essa função é chamada a cada atualização de quadros
   *
   * @private
   * @memberof Engine
   */
  private update(): void {

    Time.computeDeltaTime();
    Time.computeFramePerSecond();
    
    this.render();
    this.updateGameObjects();

    window.requestAnimationFrame(() => this.update());
  }
}