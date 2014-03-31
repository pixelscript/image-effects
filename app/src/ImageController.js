var ps = ps || {};

(function(){
    /**
     * Takes image data and creates a canvas from it
     * @constructor CanvasFromImage
     */
    function ImageController(img) {

        var c = new ps.CanvasFromImage(img.dom);
        var e = new ps.CanvasEditor(c);

        // ink
        var s = $('<div class="slider"></div>');
        s.slider({
            value: 0,
            step: 0.01,
            min: 0,
            max: 1,
            slide: function( event, ui ) {e.ink(ui.value);}});
        $('body').append(s);

        // denoise
        var d = $('<div class="slider"></div>');
        d.slider({
            value: 0,
            step: 0.01,
            min: 0,
            max: 50,
            slide: function( event, ui ) {e.denoise(ui.value);}});
        $('body').append(d);

        // hue / sat
        var self = this;
        self.hue = 0;
        self.sat = 0;
        var h = $('<div class="slider"></div>');
        var s = $('<div class="slider"></div>');
        h.slider({
            value: 0,
            step: 0.01,
            min: -1,
            max: 1,
            slide: $.proxy(function( event, ui ) {
                self.hue = ui.value;
                e.hueSaturation(self.hue,self.sat);
            },this)
        });
        $('body').append(h);

        s.slider({
            value: 0,
            step: 0.01,
            min: -1,
            max: 1,
            slide: $.proxy(function( event, ui ) {
                self.sat = ui.value;
                e.hueSaturation(self.hue,self.sat);
            })
        });

        // split-tones
        $('body').append(s);
        self.alpha = 0;
        self.threshold = 0;
        // alpha
        var a = $('<div class="slider"></div>');
        a.slider({
            value: 0,
            step: 0.001,
            min: 0,
            max: 1,
            slide: function( event, ui ) {
                self.alpha = ui.value;
                console.log(self.alpha,self.threshold);
                e.alpha(self.alpha,self.threshold);
            }});
        $('body').append(a);
        // threshhold
        var t = $('<div class="slider"></div>');
        t.slider({
            value: 0,
            step: 0.001,
            min: 0,
            max: 1,
            slide: function( event, ui ) {
                self.threshold = ui.value;
                console.log(self.alpha,self.threshold);
                e.alpha(self.alpha,self.threshold);
            }});
        $('body').append(t);
    }
    ps.ImageController = ImageController;
}());