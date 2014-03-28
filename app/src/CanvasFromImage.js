var ps = ps || {};

(function(){
    /**
     * Takes image data and creates a canvas from it
     * @constructor CanvasFromImage
     */
    function CanvasFromImage(image) {
        // Check for Canvas support.
        if (!Modernizr.canvas) {
            console.warn('The Canvas element is not fully supported in this browser.');
            return;
        }
        var canvas = this.canvas = fx.canvas();
        this.image = image;

        var texture = this.texture = canvas.texture(image);

        // replace the image with the canvas
        image.parentNode.insertBefore(canvas, image);
        image.parentNode.removeChild(image);
    }

    ps.CanvasFromImage = CanvasFromImage;
}());
