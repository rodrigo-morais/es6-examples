'use strict';

var sum_es5 = function(){
    var a = 5;

    if(a === 5){
        var a = 6;
        console.log(a);
    }


    console.log(a);
}

sum_es5();

var sum_es6 = function(){
    let a = 5;

    if(a === 5){
        let a = 6;
        console.log(a);
    }


    console.log(a);
}

sum_es6();