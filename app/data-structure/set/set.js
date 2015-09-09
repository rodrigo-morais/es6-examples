'use strict';

let set1 = new Set();
set1.add(1);
set1.add(1);
set1.add(2);
set1.add(3);
console.log(set1.size);

set1.delete(1);
console.log(set1.size);

set1.add(2);
console.log(set1.size);

set1.clear();
console.log(set1.size);