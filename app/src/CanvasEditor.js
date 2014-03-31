var ps = ps || {};

(function(){
    /**
     * Takes a canvas object and modifies it
     * @constructor CanvasEditor
     */
    function CanvasEditor(c) {
        this.c = c;
        this.c.canvas.draw(this.c.texture).update();
    }

    var c = CanvasEditor.prototype;

    c.ink = function(val) {
        // apply the ink filter
        this.c.canvas.draw(this.c.texture).ink(val).update();
    }

    c.denoise = function(val) {
        // apply the denoise filter
        this.c.canvas.draw(this.c.texture).denoise(val).update();
    }

    c.hueSaturation = function(hue,saturation) {
        // apply the denoise filter
        this.c.canvas.draw(this.c.texture).hueSaturation(hue,saturation).update();
    }

    c.alpha = function(alpha,threshold) {
        // apply the denoise filter
        this.c.canvas.draw(this.c.texture).alpha(alpha,threshold).update();
    }

    ps.CanvasEditor = CanvasEditor;


}());
