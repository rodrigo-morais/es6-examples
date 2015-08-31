"use strict";

var const_es5 = function const_es5() {
    var a = 5;

    if (a === 5) {
        a = 6;
        console.log(a);
    }

    console.log(a);
};

const_es5();

var const_es6 = function const_es6() {
    var a = 5;

    if (a === 5) {
        //a = 6;
        console.log(a);
    }

    console.log(a);
};

const_es6();