// Colors 

export default class Colors {

    constructor() {

        this.strokeColorButton = document.querySelector("#picker-btn");

        this.strokeColorInput = document.createElement("input");
        this.strokeColorInput.setAttribute("type", "color");

        this.strokeColorButton.addEventListener("click", (event) => {
            this.strokeColorInput.click();
        });

    }

    init(model, controls) {

        this.model = model;
        this.controls = controls;

        this.strokeColorInput.addEventListener("change", (event) => {
            let colorPicked = this.strokeColorInput.value;

            //this.strokeColorButton.style.backgroundColor = colorPicked;
            this.controls.setStrokeColor(colorPicked);
        });

        var colorBtn1 = document.querySelector("#color-1-btn");

        colorBtn1.addEventListener("click", (event) => {
            this.controls.setStrokeColor("black")
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
    }

}