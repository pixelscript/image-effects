var ps = ps || {};

(function(){
    /**
     * Takes image data and creates a canvas from it
     * @constructor CanvasFromImage
     */
    function CanvasFromImage(img) {
        // Check for Canvas support.
        if (!Modernizr.canvas) {
            console.warn('The Canvas element is not fully supported in this browser.');
            return;
        }
        var image = this.image = new Image(),
            canvas = this.canvas = document.createElement("canvas");
        image.src = img;
        canvas.width = image.width;
        canvas.height = image.height;
        canvas.getContext("2d").drawImage(image, 0, 0);
        $('body').append(canvas);
    }

    ps.CanvasFromImage = CanvasFromImage;
}());
