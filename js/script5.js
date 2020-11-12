"use strict";

/*function first() {
    //Do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок');
}

learnJS('JavaScript', done);*/

/*const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();

console.log(options.name);
delete options.name;
console.log(options);

let counter = 0;
for (let key in options) {
    if(typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);   
        }
    }
    else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}
console.log(counter);

console.log(Object.keys(options).length);

const {border, bg} = options.colors;
console.log(border); */

/*const arr = [1, 2, 3, 6, 8];

arr.pop();
console.log(arr);

arr.push(10);
console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for(let value of arr) {
    console.log(value);
}*/

/*const arr1 = [1, 2, 3, 6, 8, 10];

arr1.forEach(function(item, i, arr1) {
    console.log(`${i}: ${item} внутри массива ${arr1}`);
});

arr1[99] = 0;
console.log(arr1.length);
console.log(arr1);*/

/*const str = prompt("","");
const products = str.split(", ");
products.sort();
console.log(products.join('; '));*/

const arr2 = [15, 25, 123, 6, 68, 10];

arr2.sort();
console.log(arr2);

function compareNum(a, b) {
    return a - b;
}

arr2.sort(compareNum);
console.log(arr2);
