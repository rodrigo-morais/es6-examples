'use strict';

let arrLike = window.document.querySelectorAll('div');
console.log(arrLike);
console.log(arrLike.forEach);

let fromArr = Array.from(arrLike);
console.log(fromArr);
console.log(fromArr.forEach);