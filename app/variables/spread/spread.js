'use strict';

var spread_func = function(x, y, z){
    console.log(x + y + z);
};

spread_func(...[1,2,3]);

var spread = function(){
    let arr = [3,4];
    let arr2 = [1,2,...arr,5,6,7];
    
    arr2.forEach(function(_number){
        console.log(_number);
    });
};

spread();