'use strict';

let add = (x, y) => x + y;
console.log(add(3,5));

let square = x => x * x;
console.log(square(5));

let toUpper = () => 'test'.toUpperCase();
console.log(toUpper());

let sum = (x,y) =>{
    let result = x + y;
    return result;
};
console.log(sum(3,5));

let sum_array = (...arr) =>{
    let sum = 0;
    arr.forEach((n) => sum += n);

    return sum;
};
console.log(sum_array(1,4,6,7));

let double = (...arr) => arr.map((n) => n * 2);
console.log(double(1,4,6,7));