// LISTENS FOR EVENTS
export default class Tools {

    init(model, controls) {

        this.model = model;
        this.controls = controls;


        document.addEventListener('keydown', (event) => {
            if (event.ctrlKey && event.key === 'z') {
                this.controls.undoAction();
            }

            if (event.ctrlKey && event.key === 'y') {
                this.controls.redoAction();
            }

        });

        var textButton = document.querySelector("#text-btn");

        textButton.addEventListener("click", (event) => {

            this.controls.setTextMode();

        });

        this.canvas = document.querySelector("#drawing-canvas");
        this.context = this.canvas.getContext("2d");

        this.tempCanvas = document.querySelector("#temp-canvas");
        this.tempContext = this.tempCanvas.getContext("2d");

        this.tempCanvas.addEventListener("mousedown", (event) => {

            if (this.liveText) {

                this.tempContext.font = "3rem Times New Roman";

                this.tempContext.fillText(this.textInput.value, this.textX, this.textY);

                document.body.removeChild(this.textInput);

                this.liveText = false;

                this.model.createImage(this.tempCanvas);

            } else {

                controls.mouseDown(event, this.tempCanvas);

                window.addEventListener("mousemove", mouseMove);
                window.addEventListener("mouseup", mouseUp);
            }
        });

        function mouseMove(event) { // continuosly
            controls.mouseMove(event);
        }

        let mouseUp = (event) => { // one time
            controls.mouseUp(this.tempCanvas);

            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseup", mouseUp);
        }

    }

    drawText(x, y) {

        this.clear();

        this.textInput = document.createElement("input");

        this.textInput.setAttribute("type", "text");

        document.body.appendChild(this.textInput);

        this.textInput.style.position = "absolute";

        this.textInput.style.fontSize = "3rem";

        this.textInput.style.top = y + 130 + "px";

        this.textInput.style.left = x + "px";

        this.textInput.style.fontFamily = "Times New Roman";


        this.liveText = true;
        this.textX = x;
        this.textY = y;

    }
    setStrokeColor(colorPicked) {

        this.tempContext.strokeStyle = colorPicked;

    }

    adjustCanvas(imageWidth, imageHeight) {

        this.canvas.setAttribute("width", imageWidth);
        this.canvas.setAttribute("height", imageHeight);

        this.tempCanvas.setAttribute("width", imageWidth);
        this.tempCanvas.setAttribute("height", imageHeight);
    }

    clear() {

        this.tempContext.clearRect(0, 0, this.tempCanvas.width, this.tempCanvas.height);
    }

}