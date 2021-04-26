let person = { name: 'Gustavo' };
let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
console.log(descriptor);

Object.defineProperty(person, 'name', {
    writable: false,
    enumerable: false,
    configurable: false
});

person.name = 'John';
delete person.name;

console.log(person);
console.log(Object.keys(person));