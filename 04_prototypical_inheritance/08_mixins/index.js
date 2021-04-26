function mixin(target, ...sources) {
    Object.assign(target, ...sources);
}

const canEat = {
    eat: function() {
        this.hunger--;
        console.log('eating');
    }
};

const canWalk = {
    walk: function() {
        console.log('walking');
    }
};

const canSwim = {
    swin: function() {
        console.log('swimming');
    }
};

function Person() {
}

mixin(Person.prototype, canEat, canWalk);

function Goldfish() {
}

mixin(Goldfish.prototype, canEat, canSwim);

function Dog() {
}

mixin(Dog.prototype, canEat, canWalk, canSwim);

const person = new Person();
const goldfish = new Goldfish();
const dog = new Dog();

console.log('person:', person);
console.log('goldfish:', goldfish);
console.log('dog:', dog);