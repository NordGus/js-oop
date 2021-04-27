class Shape {
    move() { console.log('move'); }
}

class Circle extends Shape {
    move() { 
        super.move();
        console.log('circle move'); 
    }
}

const c = new Circle();
const s = new Shape();

s.move();
c.move();