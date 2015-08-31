'use strict';

var const_es5 = function(){
    var a = 5;

    if(a === 5){
        a = 6;
        console.log(a);
    }


    console.log(a);
}

const_es5();

var const_es6 = function(){
    const a = 5;

    if(a === 5){
        //a = 6;
        console.log(a);
    }


    console.log(a);
}

const_es6();