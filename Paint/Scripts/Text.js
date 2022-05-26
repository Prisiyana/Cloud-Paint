// Text 

export default class Text {

    init(model, controls, tools) {

        this.model = model;
        this.controls = controls;
        this.tools = tools;

        var textButton = document.querySelector("#text-btn");

        textButton.addEventListener("click", (event) => {

            this.controls.setTextMode();

        });


    }

    drawText(x, y) {
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
}