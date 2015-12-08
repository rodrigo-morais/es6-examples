requirejs.config({
    callback: function () {
        "use strict";

        require(['./imports.js'], function (Module) {
            
        });
        
        require(['./imports_variable.js'], function (Module) {
            
        });
    }
});