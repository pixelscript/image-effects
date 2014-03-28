var ps = ps || {};

(function(){
    /**
     * Takes a canvas object and modifies it
     * @constructor CanvasEditor
     */
    function CanvasEditor(c) {
        this.c = c;
        this.c.canvas.draw(this.c.texture);
    }

    var c = CanvasEditor.prototype;

    c.ink = function(val) {
        // apply the ink filter
        this.c.canvas.draw(this.c.texture).ink(val).update();
    }

    ps.CanvasEditor = CanvasEditor;


}());
