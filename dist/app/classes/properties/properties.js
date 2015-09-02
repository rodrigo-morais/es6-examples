"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var MachineES6 = (function () {
    function MachineES6(name) {
        _classCallCheck(this, MachineES6);

        this._name = name;
    }

    _createClass(MachineES6, {
        name: {
            get: function () {
                return this._name;
            },
            set: function (value) {
                this._name = value;
            }
        }
    });

    return MachineES6;
})();

var machineES6 = new MachineES6("Computer");

console.log(machineES6.name);

machineES6.name = "Laptop";
console.log(machineES6.name);