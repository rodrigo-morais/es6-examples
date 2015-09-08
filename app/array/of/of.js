'use strict';

let arr1 = new Array(1, 2 ,3);
console.log(arr1.length);
console.log(JSON.stringify(arr1));

let arr2 = new Array(3);
console.log(arr2.length);
console.log(JSON.stringify(arr2));

let arr3 = Array.of(3);
console.log(arr3.length);
console.log(JSON.stringify(arr3));