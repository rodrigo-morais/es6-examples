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
    constructor(title, name){
        super(name);
        this._title = title;
    }

    get title(){
        return this._title;
    }

    doWork(){
        return `${this._name} is working.`;
    }
}

let employee = new Employee('Developer', 'Rodrigo');

console.log(employee.title);
console.log(employee.name);
console.log(employee.doWork());