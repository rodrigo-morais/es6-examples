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

    getSalary(){
        return 12000;
    }
}

class Manager extends Employee{
    constructor(name){
        super('Manager',name);
    }

    doWork(){
        return `${this._name} is managing.`;
    }

    getSalary(){
        let salary = super.getSalary();
        return salary + (salary * 0.15);
    }
}

let employee = new Employee('Developer', 'Rodrigo');

console.log(employee.title);
console.log(employee.name);
console.log(employee.doWork());
console.log(employee.getSalary());

let manager = new Manager('Carlos');

console.log(manager.title);
console.log(manager.name);
console.log(manager.doWork());
console.log(manager.getSalary());