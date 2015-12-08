requirejs.config({
    callback: function () {
        "use strict";

        require(['./module_default.js'], function (Module) {
            
        });
        
        require(['./module.js'], function (Module) {
            
        });
    }
});