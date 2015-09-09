"use strict";

var promise = new Promise(function (resolve, reject) {
    resolve(1);
});
promise.then(function (data) {
    console.log(data);
});

var rejectPromise = new Promise(function (resolve, reject) {
    reject(Error("Error 1"));
});
rejectPromise.then(function () {}, function (error) {
    console.log(error.message);
});

rejectPromise["catch"](function (error) {
    console.log(error.message);
});

var previousPromise = new Promise(function (resolve, reject) {
    resolve("test");
});
var secondPromise = new Promise(function (resolve, reject) {
    resolve(previousPromise);
});
secondPromise.then(function (data) {
    console.log(data);
});

var staticPreviousPromise = Promise.resolve("previous");
var secondStaticPromise = Promise.resolve(staticPreviousPromise);
secondStaticPromise.then(function (data) {
    console.log(data);
});

//success