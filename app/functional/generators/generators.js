'use strict';

let fibonacci = function*() {
    let fn1 = 1;
    let fn2 = 1;

    while(true){
        let current = fn2;
        fn2 = fn1;
        fn1 = fn1 + current;

        let reset = yield current;
        if(reset){
            fn1 = 1;
            fn2 = 1;
        }
    }
};

let sequence = fibonacci();

for(let count = 0; count < 9; count++){
    console.log(sequence.next().value);
}
sequence.next(true);

class Company{
    constructor(){
        this.employees = [];
    }

    addEmployees(names){
        this.employees = this.employees.concat(names);
    }

    *getEmployees(){
        for(let e of this.employees){
            yield e;
        }
    }
}

let count = 0;
let company = new Company();
company.addEmployees(['Paul','Arnold','Carol','Susan','Ryan']);

for(let employee of company.getEmployees()){
    console.log(employee);
    count += 1;
}

console.log(count);

class Product{
    constructor(name, weight, price){
        this._name = name;
        this._weight = weight;
        this._price = price;
    }

    get name(){
        return this._name;
    }

    get weight(){
        return this._weight;
    }

    get price(){
        return this._price;
    }
}

class Store{
    constructor(){
        this.products = [];
    }

    addProducts(products){
        this.products = this.products.concat(products);
    }

    *getProducts(){
        for(let e of this.products){
            yield e;
        }
    }
}

count = 0;
let store = new Store();
let p1 = new Product('ChromeCast', 10, 40);
let p2 = new Product('Book', 5, 20);
let p3 = new Product('TV', 100, 400);
let p4 = new Product('Car', 1200, 4800);
let p5 = new Product('Smart Phone', 10, 140);
store.addProducts([p1,p2, p3, p4, p5]);

let filter = function*(items, predicate){
    for(let item of items){
        if(predicate(item)){
            yield item;
        }
    }
};

for(let product of filter(store.getProducts(), p => p.weight >= 100)){
    console.log(product);
    count += 1;
}

console.log(count);