'use strict';

let arr1 = [1,3,5,10,12];
let match = arr1.find(n => n > 5);
console.log(match);

match = arr1.find(n => n > 50);
console.log(match);

let find_bigger_than_five = (element, index, array) => {
    console.log(element);
    console.log(index);
    console.log(array);
    if(element > 5){
        return element;
    }
};
match = arr1.find(find_bigger_than_five);
console.log(match);