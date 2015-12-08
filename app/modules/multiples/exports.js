export class Employee {
	constructor(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	doWork() {
		return `${this._name} is working`;
	}
}

export let emp = new Employee('Morais');

export let number = 12;