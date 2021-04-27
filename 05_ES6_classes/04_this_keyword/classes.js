// By default classes' bodies are excecuted in strict mode, preventing us from
// accidentally modify the global object (Window for documents and Global for Node)

console.log('ES6 Classes without Strict mode.');

class Circle {
    draw() { console.log(this); }
}

const c = new Circle();
c.draw();

const draw = c.draw;
console.log(draw);
draw();