'use strict';

let promise = new Promise(function(resolve, reject){
    resolve(1);
});
promise.then(function(data){
    console.log(data);
});

let rejectPromise = new Promise(function(resolve, reject){
    reject(Error('Error 1'));
});
rejectPromise.then(function(){
    //success
},
function(error){
    console.log(error.message);
});

rejectPromise.catch(function(error){
    console.log(error.message);
});

let previousPromise = new Promise(function(resolve, reject){
    resolve('test');
});
let secondPromise = new Promise(function(resolve, reject){
    resolve(previousPromise);
});
secondPromise.then(function(data){
    console.log(data);
});


let staticPreviousPromise = Promise.resolve('previous');
let secondStaticPromise = Promise.resolve(staticPreviousPromise);
secondStaticPromise.then(function(data){
    console.log(data);
});