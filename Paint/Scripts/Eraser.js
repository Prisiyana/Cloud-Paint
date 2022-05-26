// Eraser 

export default class Eraser {

    init(model, controls) {

        this.model = model;
        this.controls = controls;

        var eraser = document.querySelector("#eraser-btn");

        eraser.addEventListener("click", (event) => {

            this.controls.
            this.controls.setStrokeColor("white")
        });

    }
}