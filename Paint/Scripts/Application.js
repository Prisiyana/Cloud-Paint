import Model from "./Model.js";
import Tools from "./Tools.js";
import Controls from "./Controls.js";
import Colors from "./Colors.js";
import FileProps from "./FileProperties.js";
import Text from "./Text.js";
import DrawingProps from "./Drawing.js";
import Eraser from "./Eraser.js";

export default class Application {

    constructor() {

        let model = new Model();
        let tools = new Tools();
        let controls = new Controls();
        let colors = new Colors();
        let file_props = new FileProps();
        let text = new Text();
        let drawing = new DrawingProps();
        let eraser = new Eraser();


        model.init(controls, tools);
        tools.init(model, controls);
        controls.init(model, tools, text, drawing);
        colors.init(model, controls);
        file_props.init(model, tools);
        //text.init(model, controls, tools, colors);
        drawing.init(model, controls, tools);
        eraser.init(model, controls);
    }
}