"use strict";

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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
    function Employee(title, name) {
        _classCallCheck(this, Employee);

        _get(Object.getPrototypeOf(Employee.prototype), "constructor", this).call(this, name);
        this._title = title;
    }

    _inherits(Employee, _Person);

    _createClass(Employee, {
        title: {
            get: function () {
                return this._title;
            }
        },
        doWork: {
            value: function doWork() {
                return "" + this._name + " is working.";
            }
        },
        getSalary: {
            value: function getSalary() {
                return 12000;
            }
        }
    });

    return Employee;
})(Person);

var Manager = (function (_Employee) {
    function Manager(name) {
        _classCallCheck(this, Manager);

        _get(Object.getPrototypeOf(Manager.prototype), "constructor", this).call(this, "Manager", name);
    }

    _inherits(Manager, _Employee);

    _createClass(Manager, {
        doWork: {
            value: function doWork() {
                return "" + this._name + " is managing.";
            }
        },
        getSalary: {
            value: function getSalary() {
                var salary = _get(Object.getPrototypeOf(Manager.prototype), "getSalary", this).call(this);
                return salary + salary * 0.15;
            }
        }
    });

    return Manager;
})(Employee);

var employee = new Employee("Developer", "Rodrigo");

console.log(employee.title);
console.log(employee.name);
console.log(employee.doWork());
console.log(employee.getSalary());

var manager = new Manager("Carlos");

console.log(manager.title);
console.log(manager.name);
console.log(manager.doWork());
console.log(manager.getSalary());