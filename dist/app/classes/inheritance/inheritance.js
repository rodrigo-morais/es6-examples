"use strict";

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Person = (function () {
    function Person(name) {
        _classCallCheck(this, Person);

        this._name = name;
    }

    _createClass(Person, {
        name: {
            get: function () {
                return this._name;
            },
            set: function (value) {
                this._name = value;
            }
        }
    });

    return Person;
})();

var Employee = (function (_Person) {
    function Employee() {
        _classCallCheck(this, Employee);

        if (_Person != null) {
            _Person.apply(this, arguments);
        }
    }

    _inherits(Employee, _Person);

    _createClass(Employee, {
        doWork: {
            value: function doWork() {
                return "" + this._name + " is working.";
            }
        }
    });

    return Employee;
})(Person);

var employee = new Employee("Rodrigo");

console.log(employee.name);
console.log(employee.doWork());