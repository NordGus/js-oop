function Circle(radius) {
    this.radius = radius;

    this.move = () => {
        console.log('move');
    }
}

Circle.prototype.draw = function() {
    console.log('draw');
};

const c1 = new Circle(1);

// Returns instance members
console.log(Object.keys(c1));

// Returns all members (instance + prototype)
for (let key in c1) console.log(key);

for (const key in c1)
    console.log(
        'c1 has', 
        c1.hasOwnProperty(key) ? 'instance' : 'prototype', 
        'member:', 
        key);
