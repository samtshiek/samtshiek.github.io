function divider() {
    console.log("----------");
}

const myArray = [];
const numbers = [1,2,3,6,7]

console.log(numbers);
console.log("Fourth item number", numbers[3]);
console.log(numbers[0]);
console.log("Length:", numbers.length);
console.log("Number 3:", numbers[numbers.length - 3]);

numbers.push(25);
console.log(numbers);
numbers.pop();
console.log(numbers);
const cloudy = true;

const items = [1, "two", [3,4], cloudy, null];
console.log(items);
divider();
for (let i = 0; i <items.length; i++) {
    console.log("Value of i", i);
    console.log("Item:", items[i]);
}

divider();

for (let item of items) {
    console.log("Item:", item);
}
divider();

const file = ["bundle.js", "*.js.map", ".c9"];
console.log(file.join(', '));

divider();

let myObj = {};
const smallNumbers = {
    one: 1,
    two: 2,
    three: 3
}
console.log("Objects:", myObj, smallNumbers);
console.log("Values in our object:", smallNumbers.one, smallNumbers.two, smallNumbers.three);
divider();

 myObject = {
    five: 5,
    six: 'six'
};            

console.log(myObject.five);
console.log(myObject.six);
divider();

myObject.newItem = 'This is a new item in my object.';
console.log(myObject.five);
console.log(myObject.six);
console.log("New object: ", myObject.newItem);
divider();

items.push(myObject);
console.log(items);