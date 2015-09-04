'use strict';

let numbers = [6,9,1,3,8];
let iterator = numbers[Symbol.iterator]();
let next = iterator.next();

while(!next.done){
    console.log(next);
    next = iterator.next();
}


for(let n in numbers){
    console.log(n);
}

for(let n of numbers){
    console.log(n);
}