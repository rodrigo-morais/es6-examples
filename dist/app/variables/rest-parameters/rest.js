"use strict";

var sum = function sum() {
    for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
        numbers[_key] = arguments[_key];
    }

    var result = 0;

    numbers.forEach(function (_number) {
        result += _number;
    });

    console.log(result);
};

sum();
sum(4, 5);
sum(4, 5, 1, 7, 4);

var sum_accum = function sum_accum(result) {
    for (var _len = arguments.length, numbers = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        numbers[_key - 1] = arguments[_key];
    }

    numbers.forEach(function (_number) {
        result += _number;
    });

    console.log(result);
};

sum_accum(0);
sum_accum(1, 4, 5);
sum_accum(0, 4, 5, 1, 7, 4);