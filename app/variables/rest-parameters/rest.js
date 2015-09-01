'use strict';

var sum = function(...numbers){
    let result = 0;

    numbers.forEach(function(_number){
        result += _number;
    });

    console.log(result);
};

sum();
sum(4,5);
sum(4,5,1,7,4);

var sum_accum = function(result, ...numbers){
    
    numbers.forEach(function(_number){
        result += _number;
    });

    console.log(result);
};

sum_accum(0);
sum_accum(1, 4,5);
sum_accum(0, 4,5,1,7,4);