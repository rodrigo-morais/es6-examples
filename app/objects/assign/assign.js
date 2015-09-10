'use strict';

let person = {
    hurt: false,
    exploded: false
};

let soldier = {
    hit: function(target){
        target.hurt = true;
    }
};

let gun = {
    shot: function(target){
        target.exploded = true;
    }
};

Object.assign(soldier, gun);

console.log('Person Hurted:' + person.hurt);
console.log('Person Exploded:' + person.exploded);

soldier.hit(person);
console.log('Person Hurted:' + person.hurt);
console.log('Person Exploded:' + person.exploded);

soldier.shot(person);
console.log('Person Hurted:' + person.hurt);
console.log('Person Exploded:' + person.exploded);