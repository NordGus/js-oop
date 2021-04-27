const _radius = new WeakMap();

export class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }

    // this is a prototype member 
    draw() {
        console.log('Circle with radius', _radius.get(this));
    }
}

const c = new Circle(10);
console.log(_radius.get(c)); 
c.draw()
