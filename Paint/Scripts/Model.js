// ALL IMAGE OPERATIONS
export default class Model{

    constructor(){
    }

    init(controls, tools){
        this.controls = controls;
        this.tools = tools;

        this.canvas = document.querySelector("#drawing-canvas");
        this.context = this.canvas.getContext("2d");
        
        this.undo_index = 0;
        this.undo_list = [];

        let imageElement = document.createElement("img"); //!
        imageElement.src = this.canvas.toDataURL("image/png");//!

        this.undo_list[this.undo_index] = imageElement;//!
    }

    loadImageOnCanvas(imageElement){
        this.context.drawImage(imageElement, 0, 0);

        this.undo_index++;
        this.undo_list[this.undo_index] = imageElement;
    }

    getImageLink(){
        return this.canvas.toDataURL("image/png");
    }

    undoAction(){
        if(this.undo_index >= 1){ // !
            this.undo_index--;

            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }

        let imageToRedraw = this.undo_list[this.undo_index];

        this.tools.adjustCanvas(imageToRedraw.width, imageToRedraw.height);

        this.context.drawImage(imageToRedraw, 0, 0);
    }

    redoAction(){

        if(this.undo_index + 1 >= this.undo_list.length){
            return;
        }
        this.undo_index++;

        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        let imageToRedraw = this.undo_list[this.undo_index];

        this.tools.adjustCanvas(imageToRedraw.width, imageToRedraw.height);

        this.context.drawImage(imageToRedraw, 0, 0);
    }

    createImage(imageToDraw){
        this.context.drawImage(imageToDraw, 0, 0);

        let imageElement = document.createElement("img");
        imageElement.src = this.canvas.toDataURL("image/png");

        this.undo_index++;
        this.undo_list[this.undo_index] = imageElement;
    }

}