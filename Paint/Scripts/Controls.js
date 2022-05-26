// FUNCTIONALITIES
export default class Controls {

    init(model, tools, text, drawing) {

        this.model = model;
        this.tools = tools;
        this.text = text;
        this.drawing = drawing;

    }

    undoAction() {

        this.model.undoAction();

    }

    redoAction() {

        this.model.redoAction();

    }

    setDrawingMode() {

        this.mode = "freehand";

    }

    lineMode() {

        this.mode = "line";

    }

    rectMode() {

        this.mode = "strokeRectangle";

    }

    circleMode() {

        this.mode = "strokeCircle";

    }

    setStrokeColor(colorPicked) {

        this.strokeColor = colorPicked;

    }

    setTextMode() {

        this.mode = "text";

    }

    mouseDown(event, canvas) {

        this.tools.setStrokeColor(this.strokeColor);
        this.rect = canvas.getBoundingClientRect();

        this.canvasX = event.clientX - this.rect.left;
        this.canvasY = event.clientY - this.rect.top;

        if (this.mode === "freehand") {

            this.drawing.startDrawing(this.canvasX, this.canvasY);

        } else if (this.mode === "text") {

            this.tools.drawText(this.canvasX, this.canvasY);
        }
    }

    mouseMove(event) {

        this.currentX = event.clientX - this.rect.left; // current event coord
        this.currentY = event.clientY - this.rect.top;

        let a = this.canvasX - this.currentX; // beggining coord - current HORIZONTAL
        let b = this.canvasY - this.currentY; // VERTICAL

        var radius = Math.sqrt(a * a, b * b);

        if (this.mode === "freehand") {

            this.drawing.continueDrawing(event.clientX - this.rect.left, event.clientY - this.rect.top);

        } else if (this.mode === "line") {

            let endingX = event.clientX - this.rect.left;
            let endingY = event.clientY - this.rect.top;

            this.drawing.drawLine(this.canvasX, this.canvasY, endingX, endingY);

        } else if (this.mode === "strokeRectangle") {

            let width = event.clientX - this.rect.left - this.canvasX;
            let height = event.clientY - this.rect.top - this.canvasY;

            this.drawing.drawRectangle(this.canvasX, this.canvasY, width, height);

        } else if (this.mode === "strokeCircle") {

            this.drawing.drawCircle(this.canvasX, this.canvasY, radius);

        }
    }

    mouseUp(canvas) {

        this.model.createImage(canvas);

    }
}