"use strict";

var add = function (x, y) {
    return x + y;
};
console.log(add(3, 5));

var square = function (x) {
    return x * x;
};
console.log(square(5));

var toUpper = function () {
    return "test".toUpperCase();
};
console.log(toUpper());

var sum = function (x, y) {
    var result = x + y;
    return result;
};
console.log(sum(3, 5));

var sum_array = function () {
    for (var _len = arguments.length, arr = Array(_len), _key = 0; _key < _len; _key++) {
        arr[_key] = arguments[_key];
    }

    var sum = 0;
    arr.forEach(function (n) {
        return sum += n;
    });

    return sum;
};
console.log(sum_array(1, 4, 6, 7));

var double = function () {
    for (var _len = arguments.length, arr = Array(_len), _key = 0; _key < _len; _key++) {
        arr[_key] = arguments[_key];
    }

    return arr.map(function (n) {
        return n * 2;
    });
};
console.log(double(1, 4, 6, 7));