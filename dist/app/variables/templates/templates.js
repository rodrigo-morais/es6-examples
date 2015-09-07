"use strict";

var template = function template(x, y, z) {
    var color = "white";
    var size = "big";

    console.log("The cat is ${color} and ${size}.");
    console.log("The cat is " + color + " and " + size + ".");
};

template();