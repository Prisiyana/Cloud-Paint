// LISTENS FOR EVENTS
export default class Tools{

    constructor(){

        this.strokeColorButton = document.querySelector("#picker-btn");

        this.strokeColorInput = document.createElement("input");
        this.strokeColorInput.setAttribute("type", "color");

        this.strokeColorButton.addEventListener("click", (event) => {
            this.strokeColorInput.click();
        });

    }

    init(controls, model){
        this.controls = controls;
        this.model = model;

        var pasteFromCompBtn = document.querySelector("#paste-from-comp");
        var openFromCompBtn = document.querySelector("#open-document-button");
        var saveToCompBtn = document.querySelector("#save-img-button");
        var pencilDrawing = document.querySelector("#pencil-btn");

        pasteFromCompBtn.addEventListener("click", (event) => {
            this.controls.openFile();
        });

        openFromCompBtn.addEventListener("click", (event) => {
            this.controls.openFile();
        });

        saveToCompBtn.addEventListener("click", (event) => {
            this.controls.saveFile();
        });

        document.addEventListener('keydown', (event) => {
            if (event.ctrlKey && event.key === 'z') {
                this.controls.undoAction();
            }

            if (event.ctrlKey && event.key === 'y') {
                this.controls.redoAction();
            }

            if (event.ctrlKey && event.key === 's') {
                this.controls.saveFile();
            }

            if (event.ctrlKey && event.key === 'l') { // DRAW LINE
                this.controls.lineMode();
            }

            if (event.ctrlKey && event.key === 'b') { // DRAW RECTANGLE
                this.controls.rectMode();
            }

            if (event.ctrlKey && event.key === 'm') { // DRAW CIRCLE
                this.controls.circleMode();
            }

          });

        
        pencilDrawing.addEventListener("click", (event) => {
            this.controls.setDrawingMode();
        });

        var textButton = document.querySelector("#text-btn");

        textButton.addEventListener("click", (event) => {
            this.controls.setTextMode();
        });
        
        this.strokeColorInput.addEventListener("change", (event) => {
            let colorPicked = this.strokeColorInput.value;

            //this.strokeColorButton.style.backgroundColor = colorPicked;
            this.controls.setStrokeColor(colorPicked);
        });

        this.canvas = document.querySelector("#drawing-canvas");
        this.context = this.canvas.getContext("2d");

        this.tempCanvas = document.querySelector("#temp-canvas");
        this.tempContext = this.tempCanvas.getContext("2d");


        this.tempCanvas .addEventListener("mousedown", (event) => {

            if(this.liveText){
                this.tempContext.font = "3rem Times New Roman";

                this.tempContext.fillText(this.textInput.value, this.textX, this.textY);

                document.body.removeChild(this.textInput);

                this.liveText = false;

                this.model.createImage(this.tempCanvas);
            }else {
                controls.mouseDown(event, this.tempCanvas);

                window.addEventListener("mousemove", mouseMove);
                window.addEventListener("mouseup", mouseUp);
            }
        });

        function mouseMove(event){ // continuosly
            controls.mouseMove(event);
        }

        let mouseUp = (event) => { // one time
            controls.mouseUp(this.tempCanvas);

            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseup", mouseUp);
        }

    }

    setStrokeColor(colorPicked){
        this.tempContext.strokeStyle = colorPicked;
    }

    adjustCanvas(imageWidth, imageHeight){
        this.canvas.setAttribute("width", imageWidth);
        this.canvas.setAttribute("height", imageHeight);

        this.tempCanvas.setAttribute("width", imageWidth);
        this.tempCanvas.setAttribute("height", imageHeight);
    }

    startDrawing(x, y){
        let currentContext = this.tempContext;

        currentContext.beginPath();

        currentContext.moveTo(x, y);
    }

    continueDrawing(x, y){
        let currentContext = this.tempContext;

        currentContext.lineTo(x, y); // create line

        currentContext.stroke(); 

        currentContext.beginPath(); // path to line

        currentContext.moveTo(x, y);
    }

    drawText(x, y){
        this.textInput = document.createElement("input");

        this.textInput.setAttribute("type", "text");

        document.body.appendChild(this.textInput); 

        this.textInput.style.position = "absolute";

        this.textInput.style.fontSize = "3rem";

        this.textInput.style.top = y + 130 + "px";

        this.textInput.style.left = x + "px";

        this.liveText = true;
        this.textX = x;
        this.textY = y;


    }   

    drawLine(startingX, startingY, endingX, endingY){
        this.clear();

        let currentContext = this.tempContext;

        currentContext.beginPath(); // path to line

        currentContext.moveTo(startingX, startingY);

        currentContext.lineTo(endingX, endingY);

        currentContext.stroke();
    }

    drawRectangle(startingX, startingY, width, height){
        this.clear();

        let currentContext = this.tempContext;

        currentContext.strokeRect(startingX, startingY, width, height);
    }

    drawCircle(startingX, startingY, radius){
        this.clear();

        let currentContext = this.tempContext;
        let antiClockwise = false; 

        let startingAngle = 0;
        let endingAngle = Math.PI * 2;

        currentContext.beginPath();

        currentContext.arc(startingX, startingY, radius, startingAngle, endingAngle, antiClockwise); // anticlockwise
        
        currentContext.stroke();
    }

    clear(){
        this.tempContext.clearRect(0, 0, this.tempCanvas.width, this.tempCanvas.height);
    }

}