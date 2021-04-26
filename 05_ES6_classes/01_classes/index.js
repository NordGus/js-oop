class Circle {
    constructor(radius) {
        this.radius = radius;

        // this is an instance method
        this.move = function() {};
    }

    // this is a prototype method
    draw() {
        console.log('draw');
    }
}

const c = new Circle(1);
