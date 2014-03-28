var ps = ps || {};

(function(){
    /**
     * Creates an image input that spits out the images to the page
     * @constructor ImageSelector
     * @param {Boolean} multiple    whether or not to allow the multiple selection of files
     * @param {Boolean} trigger     the event to attach the activate method to
     * @param {Boolean} cb          the method to call when activated
     */
    function ImageSelector(trigger,multiple,cb) {
        this.cb = cb;
        this.trigger = trigger?trigger:'click';
        // Check for the various File API support.
        if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
            console.warn('The File APIs are not fully supported in this browser.');
        }
        this.loadedImages = [];
        var dom = this.dom = $('<input type="file">');
        if(multiple) {
            dom.attr('multiple',true);
        }
        dom.on('change', $.proxy(this.processFiles,this));
    }

    var i = ImageSelector.prototype;

    i.processFiles = function(e){
        var files = e.target.files,
            self = this;
        for(var i=0, f;f = files[i];i++) {
            // Only process image files.
            if (!f.type.match('image.*')) {
                continue;
            }
            var reader = new FileReader();
            reader.onload = function(file) {
                return function(e) {
                    self.outputImage(e,file);
                }
            }(f);
            reader.readAsDataURL(f);
        }
    };

    i.getDom = function(){
        return this.dom;
    };

    i.setAction = function(cb){
        this.cb = e;
    };
    i.outputImage = function(e,fileData) {
        if(e.target.result) {
            var self = this,
                i = this.loadedImages.length;
            this.loadedImages.push({'name': fileData.name,'file': e.target.result});
            var img = $('<img src="'+e.target.result+'">');
            img.on(this.trigger,function(index){
                return function(e) {
                    self.imageClicked(e,i);
                }
            }(i));
            $('body').append(img);
        }
    };

    i.imageClicked = function(e,index) {
        if(this.cb){
            this.cb(this.loadedImages[index]);
        }
    };

    ps.ImageSelector = ImageSelector;

}());
