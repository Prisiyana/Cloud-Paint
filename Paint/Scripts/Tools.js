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