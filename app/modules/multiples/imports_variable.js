import * as exp from './exports.js';

var employee = new exp.Employee('Rodrigo');
console.log(employee.doWork()); //Rodrigo is working

console.log(exp.emp.doWork());

console.log(exp.number);