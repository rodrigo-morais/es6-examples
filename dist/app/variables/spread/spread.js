"use strict";

var spread_func = function spread_func(x, y, z) {
    console.log(x + y + z);
};

spread_func.apply(undefined, [1, 2, 3]);

var spread = function spread() {
    var arr = [3, 4];
    var arr2 = [1, 2].concat(arr, [5, 6, 7]);

    arr2.forEach(function (_number) {
        console.log(_number);
    });
};

spread();