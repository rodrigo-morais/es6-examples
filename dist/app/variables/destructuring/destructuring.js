"use strict";

var _slicedToArray = function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) { _arr.push(_step.value); if (i && _arr.length === i) break; } return _arr; } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } };

var destructuring_simple = function destructuring_simple() {
    var a = 5;
    var b = 6;

    console.log(a);
    console.log(b);

    var _ref = [1, 2, 3];
    var c = _ref[0];
    var d = _ref[2];

    console.log(c);
    console.log(d);
};

destructuring_simple();

var array_return = function array_return() {
    return [5, 6];
};

var destructuring_function = function destructuring_function() {
    var _array_return = array_return();

    var _array_return2 = _slicedToArray(_array_return, 2);

    var a = _array_return2[0];
    var b = _array_return2[1];

    console.log(a);
    console.log(b);
};

destructuring_function();

var object_return = function object_return() {
    return {
        firstName: "Rodrigo",
        lastName: "Morais"
    };
};

var destructuring_object = function destructuring_object() {
    var _object_return = object_return();

    var first_name = _object_return.firstName;
    var last_name = _object_return.lastName;

    console.log(first_name);
    console.log(last_name);

    var _object_return2 = object_return();

    var firstName = _object_return2.firstName;
    var lastName = _object_return2.lastName;

    console.log(firstName);
    console.log(lastName);
};

destructuring_object();