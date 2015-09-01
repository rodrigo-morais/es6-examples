'use strict';

var destructuring_simple = function(){
    let [a, b] = [5, 6];

    console.log(a);
    console.log(b);

    let [c,,d] = [1,2,3];

    console.log(c);
    console.log(d);
};

destructuring_simple();

var array_return = function(){
    return [5,6];
};

var destructuring_function = function(){
    let [a, b] = array_return();

    console.log(a);
    console.log(b);
};

destructuring_function();

var object_return = function(){
    return {
        firstName: 'Rodrigo',
        lastName: 'Morais'
    };
};

var destructuring_object = function(){
    let {firstName: first_name, lastName: last_name} = object_return();

    console.log(first_name);
    console.log(last_name);

    let {firstName, lastName} = object_return();

    console.log(firstName);
    console.log(lastName);
};

destructuring_object();