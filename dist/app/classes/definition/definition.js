"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var MachineES5 = function MachineES5() {};

MachineES5.prototype.doWork = function () {
    return "doing ES5";
};

var machineES5 = new MachineES5();

console.log(machineES5.doWork());

var MachineES6 = (function () {
    function MachineES6() {
        _classCallCheck(this, MachineES6);
    }

    _createClass(MachineES6, {
        doWork: {
            value: function doWork() {
                return "doing ES6";
            }
        }
    });

    return MachineES6;
})();

var machineES6 = new MachineES6();

console.log(machineES6.doWork());