// FUNCTIONALITIES
export default class Controls{

    constructor(){}

    init(model, tools) {
        this.model = model;
        this.tools = tools;
    }

    openFile(){
        let imageInput = document.createElement("input");

        imageInput.setAttribute("type", "file");
        imageInput.setAttribute("accept", "image/jpeg, image/png");

        imageInput.addEventListener("change", (event) => {
            let imageFile = imageInput.files[0];

            const fileReader = new FileReader();

            fileReader.addEventListener("load", () => {
                let imageElement = document.createElement("img");

                imageElement.addEventListener("load", () => {
                    this.tools.adjustCanvas(imageElement.width, imageElement.height);

                    this.model.loadImageOnCanvas(imageElement);
                });

                imageElement.src = fileReader.result;

            });

            if(imageFile){
                fileReader.readAsDataURL(imageFile);
            }

        });

        imageInput.click();



    }

    saveFile(){
        let linkElement = document.createElement("a");

        linkElement.setAttribute("download", "newImage.png");

        document.body.appendChild(linkElement);

        linkElement.addEventListener("click", (event) => {
            linkElement.href = this.model.getImageLink();

            document.body.removeChild(linkElement);
        });

        linkElement.click();
        
    }

    undoAction(){
        this.model.undoAction();
    }
    
    redoAction(){
        this.model.redoAction();
    }

    setDrawingMode(){
        this.mode = "freehand";
    }

    lineMode(){
        this.mode = "line";
    }

    rectMode(){
        this.mode = "strokeRectangle";
    }

    circleMode(){
        this.mode = "strokeCircle";
    }

    setStrokeColor(colorPicked){
        this.strokeColor = colorPicked;
    }

    setTextMode(){
        this.mode = "text";
    }

    mouseDown(event, canvas){
        this.tools.setStrokeColor(this.strokeColor);
        this.rect = canvas.getBoundingClientRect();

        this.canvasX = event.clientX - this.rect.left;
        this.canvasY = event.clientY - this.rect.top;

        if(this.mode === "freehand"){
            this.tools.startDrawing(this.canvasX, this.canvasY);
        } else if(this.mode === "text"){
            this.tools.drawText(this.canvasX, this.canvasY);
        }
    }

    mouseMove(event){
        this.currentX = event.clientX - this.rect.left; // current event coord
        this.currentY = event.clientY - this.rect.top;

        let a = this.canvasX - this.currentX;// beggining coord - current HORIZONTAL
        let b = this.canvasY - this.currentY; // VERTICAL

        var radius = Math.sqrt(a * a, b * b);

        if(this.mode === "freehand"){
            this.tools.continueDrawing(event.clientX - this.rect.left, event.clientY - this.rect.top); 
        } else if(this.mode === "line"){
            let endingX = event.clientX - this.rect.left;
            let endingY = event.clientY - this.rect.top;

            this.tools.drawLine(this.canvasX, this.canvasY, endingX, endingY);
        } else if(this.mode === "strokeRectangle"){
            let width = event.clientX - this.rect.left - this.canvasX;
            let height = event.clientY - this.rect.top - this.canvasY;

            this.tools.drawRectangle(this.canvasX, this.canvasY, width, height);
        } else if(this.mode === "strokeCircle"){

            this.tools.drawCircle(this.canvasX, this.canvasY, radius);
        }
    }

    mouseUp(canvas){
        this.model.createImage(canvas);
    }
}