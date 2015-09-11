'use strict';

let soldier = {
    weapon: 'laser',
    allowed: 'to kill',
    bullets: 0,
    attack(){
        return 'kill people';
    }
};

let proxySoldier = new Proxy(soldier, {
    get(target, property) {
        if(property === 'bullets' && target.weapon === 'laser'){
            return 'infinite';
        }
        else{
            return target[property];
        }
    },
    set(target, property, value){
        if(property === 'weapon' && value === 'laser'){
            target.bullets = 0;
        }
        else if(property === 'bullets' && target.weapon === 'laser'){
            console.log("Laser doesn't have bullets!");
        }
        else{
            target[property] = value;
        }
    }
});

console.log('Soldier');
console.log(soldier.weapon);
console.log(soldier.bullets);

console.log('Proxy Soldier');
console.log(proxySoldier.weapon);
console.log(proxySoldier.bullets);

soldier.bullets = 10;
//proxySoldier.bullets = 10;

console.log('Soldier');
console.log(soldier.weapon);
console.log(soldier.bullets);

console.log('Proxy Soldier');
console.log(proxySoldier.weapon);
console.log(proxySoldier.bullets);

soldier.weapon = 'gun';
//proxySoldier.bullets = 10;

console.log('Soldier');
console.log(soldier.weapon);
console.log(soldier.bullets);

console.log('Proxy Soldier');
console.log(proxySoldier.weapon);
console.log(proxySoldier.bullets);

soldier.weapon = 'laser';
//proxySoldier.bullets = 10;

console.log('Soldier');
console.log(soldier.weapon);
console.log(soldier.bullets);

console.log('Proxy Soldier');
console.log(proxySoldier.weapon);
console.log(proxySoldier.bullets);

soldier.attack = new Proxy(soldier.attack,{
    apply(target, context, args){
        if(context === 'pacifist'){
            return "pacifists don't attack nobody";
        }
        else{
            return target.apply(context, args);
        }
    }
});

let pacifist = {};
pacifist.attack = soldier.attack;

console.log(soldier.attack());
console.log(pacifist.attack());