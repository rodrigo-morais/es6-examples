'use strict';

console.log(-0 === 0);
console.log(Object.is(-0,0));

//console.log(NaN === NaN);
console.log(Object.is(NaN,NaN));

let person = {
    hurt: false,
    exploded: false
};
console.log(person === person);
console.log(Object.is(person, person));

let person2 = person;
console.log(person === person2);
console.log(Object.is(person, person2));

let person3 = {
    hurt: false,
    exploded: false
};
console.log(person === person3);
console.log(Object.is(person, person3));