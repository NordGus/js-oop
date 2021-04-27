// WeakMaps are dictionaries that the keys are objects and
// the values cam be any type.
const _radius = new WeakMap();
const _move = new WeakMap();

// using a single WeakMap aproach
const privateMembers = new WeakMap;

class Circle {
    constructor(radius) {
        // Single WeakMap aproach
        privateMembers.set(this, {
            radius: radius,
            move: () => {
                console.log('move', this);
            }
        });

        _radius.set(this, radius);
        _move.set(this, () => {
            // if we don't use arrow functions this would be undefined
            console.log('move', this);
        });
    }

    draw() {
        _move.get(this)();
        console.log(_radius.get(this));
    }

    drawPrivateMembers() {
        const pm = privateMembers.get(this);
        pm.move();
        console.log(pm.radius);
    }
}

const c = new Circle(1);
c.draw();
c.drawPrivateMembers();
