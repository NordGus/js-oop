Circle.prototype.draw = function() {
    this.move();
    console.log('draw');
};

Circle.prototype.toString = function() {
    return 'Circle with radius ' + this.radius;
};

function Circle(radius) {
    this.radius = radius;

    this.move = () => {
        console.log(this.toString());
        console.log('move');
    }
}

const c1 = new Circle(1);
const c2 = new Circle(1);