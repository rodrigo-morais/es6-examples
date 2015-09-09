'use strict';

let map = new Map();
map.set('age', 35);
map.set('firstName', 'Rodrigo');
map.set('middleName', '');
map.set('lastName', 'Morais');
map.set('profession', 'Software Engineer');
console.log(map.size);

map.set('middleName', 'Moreira');
console.log(map.size);

map.delete('age');
console.log(map.size);

map.clear();
console.log(map.size);

map = new Map([['age', 35], ['firstName', 'Rodrigo'], ['middleName', 'Moreira'], ['lastName', 'Morais'], ['profession', 'Software Engineer']]);
console.log(map.size);

map.forEach(function(value, key){
    console.log(key + '-' + value);
});

for(let item of map){
    console.log(item[0] + '-' + item[1]);
}



for(let [key, value] of map){
    console.log(key + '-' + value);
}