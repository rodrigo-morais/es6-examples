"use strict";

var arr1 = [1, 3, 5, 10, 12];
var match = arr1.find(function (n) {
    return n > 5;
});
console.log(match);

match = arr1.find(function (n) {
    return n > 50;
});
console.log(match);

var find_bigger_than_five = function (element, index, array) {
    console.log(element);
    console.log(index);
    console.log(array);
    if (element > 5) {
        return element;
    }
};
match = arr1.find(find_bigger_than_five);
console.log(match);

//findIndex
match = arr1.findIndex(function (n) {
    return n > 5;
});
console.log(match);

match = arr1.findIndex(function (n) {
    return n > 50;
});
console.log(match);

match = arr1.findIndex(find_bigger_than_five);
console.log(match);