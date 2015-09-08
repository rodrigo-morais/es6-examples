'use strict';

let arr = ['Paul', 'Ringo', 'John'];

let entries = arr.entries();
console.log(entries);
let first = entries.next().value;
console.log(first[0]);
console.log(first[1]);

let keys = arr.keys();
console.log(keys);
let firstKey = keys.next().value;
console.log(firstKey);