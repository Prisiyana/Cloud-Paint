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

          });

        var line = document.querySelector("#line-btn");

        line.addEventListener("click", (event) => {
            this.controls.lineMode();
        });

        var rect = document.querySelector("#rectangle-btn");

        rect.addEventListener("click", (event) => {
            this.controls.rectMode();
        });

        var circle = document.querySelector("#oval-btn");

        circle.addEventListener("click", (event) => {
            this.controls.circleMode();
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

        var colorBtn1 = document.querySelector("#color-1-btn");

        colorBtn1.addEventListener("click", (event) => {
            this.controls.setStrokeColor("black")
        });

        var colorBtn2 = document.querySelector("#color-2-btn");

        colorBtn2.addEventListener("click", (event) => {
            this.controls.setStrokeColor("white")
        });

        var blackColor = document.querySelector("#black-btn");

        blackColor.addEventListener("click", (event) => {
            this.controls.setStrokeColor("black")
        });

        var whiteColor = document.querySelector("#white-btn");

        whiteColor.addEventListener("click", (event) => {
            this.controls.setStrokeColor("white")
        });

        var grayColor = document.querySelector("#gray-btn");

        grayColor.addEventListener("click", (event) => {
            this.controls.setStrokeColor("grey")
        });

        var lightgrayColor = document.querySelector("#lightgray-btn");

        lightgrayColor.addEventListener("click", (event) => {
            this.controls.setStrokeColor("lightgray")
        });

        var darkredColor = document.querySelector("#dark-red-btn");

        darkredColor.addEventListener("click", (event) => {
            this.controls.setStrokeColor("darkred")
        });

        var brownColor = document.querySelector("#brown-btn");

        brownColor.addEventListener("click", (event) => {
            this.controls.setStrokeColor("saddlebrown")
        });

        var redColor = document.querySelector("#red-btn");

        redColor.addEventListener("click", (event) => {
            this.controls.setStrokeColor("red")
        });

        var lightpinkColor = document.querySelector("#lightpink-btn");

        lightpinkColor.addEventListener("click", (event) => {
            this.controls.setStrokeColor("lightpink")
        });

        var orangeColor = document.querySelector("#orange-btn");

        orangeColor.addEventListener("click", (event) => {
            this.controls.setStrokeColor("orange")
        });

        var goldColor = document.querySelector("#gold-btn");

        goldColor.addEventListener("click", (event) => {
            this.controls.setStrokeColor("gold")
        });

        var yellowColor = document.querySelector("#yellow-btn");

        yellowColor.addEventListener("click", (event) => {
            this.controls.setStrokeColor("yellow")
        });

        var lightyellowColor = document.querySelector("#lightyellow-btn");

        lightyellowColor.addEventListener("click", (event) => {
            this.controls.setStrokeColor("lightyellow")
        });

        var greenColor = document.querySelector("#green-btn");

        greenColor.addEventListener("click", (event) => {
            this.controls.setStrokeColor("green")
        });

        var limeColor = document.querySelector("#lime-btn");

        limeColor.addEventListener("click", (event) => {
            this.controls.setStrokeColor("lime")
        });

        var turquoiseColor = document.querySelector("#turquoise-btn");

        turquoiseColor.addEventListener("click", (event) => {
            this.controls.setStrokeColor("turquoise")
        });

        var paleturquoiseColor = document.querySelector("#paleturquoise-btn");

        paleturquoiseColor.addEventListener("click", (event) => {
            this.controls.setStrokeColor("paleturquoise")
        });

        var blueColor = document.querySelector("#blue-btn");

        blueColor.addEventListener("click", (event) => {
            this.controls.setStrokeColor("blue")
        });

        var deepskyblueColor = document.querySelector("#deepskyblue-btn");

        deepskyblueColor.addEventListener("click", (event) => {
            this.controls.setStrokeColor("deepskyblue")
        });

        var cornflowerblueColor = document.querySelector("#cornflowerblue-btn");

        cornflowerblueColor.addEventListener("click", (event) => {
            this.controls.setStrokeColor("cornflowerblue")
        });

        var steelblueColor = document.querySelector("#steelblue-btn");

        steelblueColor.addEventListener("click", (event) => {
            this.controls.setStrokeColor("steelblue")
        });

        var purpleColor = document.querySelector("#purple-btn");

        purpleColor.addEventListener("click", (event) => {
            this.controls.setStrokeColor("purple")
        });

        var lavenderColor = document.querySelector("#lavender-btn");

        lavenderColor.addEventListener("click", (event) => {
            this.controls.setStrokeColor("lavender")
        });

        var mediumpurpleColor = document.querySelector("#mediumpurple-btn");

        mediumpurpleColor.addEventListener("click", (event) => {
            this.controls.setStrokeColor("mediumpurple")
        });

        var violetColor = document.querySelector("#violet-btn");

        violetColor.addEventListener("click", (event) => {
            this.controls.setStrokeColor("violet")
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