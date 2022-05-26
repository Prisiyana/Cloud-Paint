// File properties

export default class FileProps {

    init(model, tools) {

        this.model = model;
        this.tools = tools;

        var pasteFromCompBtn = document.querySelector("#paste-from-comp");
        var openFromCompBtn = document.querySelector("#open-document-button");
        var saveToCompBtn = document.querySelector("#save-img-button");

        pasteFromCompBtn.addEventListener("click", (event) => {
            this.openFile();
        });

        openFromCompBtn.addEventListener("click", (event) => {
            this.openFile();
        });

        saveToCompBtn.addEventListener("click", (event) => {
            this.saveFile();
        });

        document.addEventListener('keydown', (event) => {

            if (event.ctrlKey && event.key === 's') {
                this.saveFile();
            }

        });
    }

    openFile() {
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

            if (imageFile) {
                fileReader.readAsDataURL(imageFile);
            }

        });

        imageInput.click();

    }

    saveFile() {
        let linkElement = document.createElement("a");

        linkElement.setAttribute("download", "newImage.png");

        document.body.appendChild(linkElement);

        linkElement.addEventListener("click", (event) => {
            linkElement.href = this.model.getImageLink();

            document.body.removeChild(linkElement);
        });

        linkElement.click();

    }
}