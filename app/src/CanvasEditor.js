var ps = ps || {};

(function(){
    /**
     * Takes a canvas object and modifies it
     * @constructor CanvasEditor
     */
    function CanvasEditor(canvas) {
        if (!Modernizr.canvas) {
            console.warn('The Canvas element is not fully supported in this browser.');
            return;
        }

        var canvasGL = this.canvasGL = document.createElement("canvas");
        canvasGL.width = canvas.width;
        canvasGL.height = canvas.height;
        var gl =  canvasGL.getContext('glcanvas') || canvasGL.getContext("webgl") || canvasGL.getContext("experimental-webgl");
        if(!gl) {
            console.warn('webgl is not supported in this browser');
        }
        $('body').append(canvasGL);
    }
    ps.CanvasEditor = CanvasEditor;
}());
