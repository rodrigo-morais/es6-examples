"use strict";

console.log(-0 === 0);
console.log(Object.is(-0, 0));

//console.log(NaN === NaN);
console.log(Object.is(NaN, NaN));

var person = {
    hurt: false,
    exploded: false
};
console.log(person === person);
console.log(Object.is(person, person));

var person2 = person;
console.log(person === person2);
console.log(Object.is(person, person2));

var person3 = {
    hurt: false,
    exploded: false
};
console.log(person === person3);
console.log(Object.is(person, person3));