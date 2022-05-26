// Drawing lines and shapes

export default class DrawingProps {

    init(model, controls, tools) {

        this.model = model;
        this.controls = controls;
        this.tools = tools;

        var pencilDrawing = document.querySelector("#pencil-btn");

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

    }

    startDrawing(x, y) {

        let currentContext = this.tools.tempContext;

        currentContext.beginPath();

        currentContext.moveTo(x, y);
    }

    continueDrawing(x, y) {

        let currentContext = this.tools.tempContext;

        currentContext.lineTo(x, y); // create line

        currentContext.stroke();

        currentContext.beginPath(); // path to line

        currentContext.moveTo(x, y);
    }

    drawLine(startingX, startingY, endingX, endingY) {

        this.tools.clear();

        let currentContext = this.tools.tempContext;

        currentContext.beginPath(); // path to line

        currentContext.moveTo(startingX, startingY);

        currentContext.lineTo(endingX, endingY);

        currentContext.stroke();
    }

    drawRectangle(startingX, startingY, width, height) {

        this.tools.clear();

        let currentContext = this.tools.tempContext;

        currentContext.strokeRect(startingX, startingY, width, height);
    }

    drawCircle(startingX, startingY, radius) {

        this.tools.clear();

        let currentContext = this.tools.tempContext;
        let antiClockwise = false;

        let startingAngle = 0;
        let endingAngle = Math.PI * 2;

        currentContext.beginPath();

        currentContext.arc(startingX, startingY, radius, startingAngle, endingAngle, antiClockwise); // anticlockwise

        currentContext.stroke();
    }

}