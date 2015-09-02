'use strict';

class MachineES6{
    constructor(name){
        this._name = name;
    }

    get name(){
        return this._name;
    }

    set name(value){
        this._name = value;
    }
}

let machineES6 = new MachineES6('Computer');

console.log(machineES6.name);

machineES6.name = "Laptop";
console.log(machineES6.name);
