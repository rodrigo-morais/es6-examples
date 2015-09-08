"use strict";

var arrLike = window.document.querySelectorAll("div");
console.log(arrLike);
console.log(arrLike.forEach);

var fromArr = Array.from(arrLike);
console.log(fromArr);
console.log(fromArr.forEach);