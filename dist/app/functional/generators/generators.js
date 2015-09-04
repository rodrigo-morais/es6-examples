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