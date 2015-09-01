"use strict";

var sum = function sum() {
    var a = arguments[0] === undefined ? 1 : arguments[0];
    var b = arguments[1] === undefined ? 2 : arguments[1];

    console.log(a + b);
};

sum();
sum(4, 5);