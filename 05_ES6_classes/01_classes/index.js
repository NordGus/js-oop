class Circle {
    constructor(radius) {
        this.radius = radius;

        // this is an instance member
        this.move = function() {};
    }

    // this is a prototype member 
    draw() {
        console.log('draw');
    }
}

const c = new Circle(1);
