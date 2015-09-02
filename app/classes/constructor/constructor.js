'use strict';

class MachineES6{
    constructor(name){
        this._name = name;
    }

    getName(){
        return this._name;
    }
}

let machineES6 = new MachineES6('Computer');

console.log(machineES6.getName());