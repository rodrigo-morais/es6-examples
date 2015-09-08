"use strict";

var arr = ["Paul", "Ringo", "John"];

var entries = arr.entries();
console.log(entries);
var first = entries.next().value;
console.log(first[0]);
console.log(first[1]);

var keys = arr.keys();
console.log(keys);
var firstKey = keys.next().value;
console.log(firstKey);