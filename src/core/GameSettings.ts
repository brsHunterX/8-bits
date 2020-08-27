export default class GameSettings {

  constructor(
    
    /**
     * 
     */
    public gameTarget: string = 'app',

    /**
     * 
     */
    public gameName: string = '8-Bits',
    
    /**
     * 
     */
    public gameEnvrioment: string = 'development',
    
    /**
     * 
     */
    public gameDebug: boolean = (gameEnvrioment === 'production') ? false : true,
    
    /**
     * 
     */
    public gameDebugFPS: boolean = (gameEnvrioment === 'production') ? false : true,
    
    /**
     * 
     */
    public gameCanvasWidth: number = 640,
    
    /**
     * 
     */
    public gameCanvasHeight: number = 480,
    
    /**
     * 
     */
    public gameCanvasMarkEdges: boolean = true,
  ) { }
}