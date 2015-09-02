'use strict';

var MachineES5 = function(){};

MachineES5.prototype.doWork = function(){
    return "doing ES5";
};

var machineES5 = new MachineES5();

console.log(machineES5.doWork());

class MachineES6{
    doWork(){
        return "doing ES6";
    }
}

let machineES6 = new MachineES6();

console.log(machineES6.doWork());