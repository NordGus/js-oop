function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

// intermidiate function inheritance
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Circle(radius, color) {
    Shape.call(this, color);

    this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.draw = function() {
    console.log('draw');
}

function Square(size) {
    this.size = size;
}

extend(Square, Shape);

const shape = new Shape('green');
const circle = new Circle(1, 'red');
const square = new Square(1);