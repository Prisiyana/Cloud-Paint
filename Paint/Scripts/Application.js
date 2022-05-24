import Model from "./Model.js";
import Tools from "./Tools.js";
import Controls from "./Controls.js";

export default class Application{

    constructor(){

        let model = new Model();
        let tools = new Tools();
        let controls = new Controls();

        
        model.init(controls, tools);
        tools.init(controls, model);
        controls.init(model, tools);

    }
}