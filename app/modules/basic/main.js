requirejs.config({
    callback: function () {
        "use strict";

        require(['./module.js'], function (Module) {
            
        });
    }
});