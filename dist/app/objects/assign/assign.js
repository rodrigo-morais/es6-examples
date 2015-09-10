"use strict";

var person = {
    hurt: false,
    exploded: false
};

var soldier = {
    hit: function hit(target) {
        target.hurt = true;
    }
};

var gun = {
    shot: function shot(target) {
        target.exploded = true;
    }
};

Object.assign(soldier, gun);

console.log("Person Hurted:" + person.hurt);
console.log("Person Exploded:" + person.exploded);

soldier.hit(person);
console.log("Person Hurted:" + person.hurt);
console.log("Person Exploded:" + person.exploded);

soldier.shot(person);
console.log("Person Hurted:" + person.hurt);
console.log("Person Exploded:" + person.exploded);