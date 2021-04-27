const _radius = Symbol();
const _draw = Symbol();
class Circle {
    constructor(radius) {
        // 1. naming the variable with an undescore
        // at the beginning, this is an convention for writing private
        // properties, but they still are accesible from the outside.
        // this._radius = radius;

        // 2. naming using a symbol
        this[_radius] = radius;
    }

    // private methods using ES6's computed property names
    [_draw]() {}
}

const c = new Circle(1);
// Using 1st aproach, still accesible
// console.log(c._radius);

const key = Object.getOwnPropertySymbols(c)[0];
console.log(c[key]);