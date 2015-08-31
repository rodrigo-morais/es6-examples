"use strict";

var _slicedToArray = function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) { _arr.push(_step.value); if (i && _arr.length === i) break; } return _arr; } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } };

var destructuring_simple = function destructuring_simple() {
    var a = undefined,
        b = undefined;
    var _ref = [5, 6];

    var _ref2 = _slicedToArray(_ref, 2);

    a = _ref2[0];
    b = _ref2[1];

    console.log(a);
    console.log(b);
};

destructuring_simple();