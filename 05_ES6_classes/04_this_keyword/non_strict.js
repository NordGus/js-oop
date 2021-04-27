console.log('Non Strict mode.');

const CircleNS = function() {
    this.draw = function() { console.log(this); }
};

const cNS = new CircleNS();
cNS.draw();

const drawNS = cNS.draw;
console.log(drawNS);
drawNS();