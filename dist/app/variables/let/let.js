"use strict";

var sum_es5 = function sum_es5() {
    var a = 5;

    if (a === 5) {
        a = 6; // => return message error
        console.log(a);
    }

    console.log(a);
};

sum_es5();

var sum_es6 = function sum_es6() {
    var a = 5;

    if (a === 5) {
        var _a = 6;
        console.log(_a);
    }

    console.log(a);
};

sum_es6();