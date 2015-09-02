'use strict';

class Person{
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

class Employee extends Person{
    doWork(){
        return `${this._name} is working.`;
    }
}

let employee = new Employee('Rodrigo');

console.log(employee.name);
console.log(employee.doWork());
