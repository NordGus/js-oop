'use strict';

console.log('Strict mode.');

const CircleS = function() {
    this.draw = function() { console.log(this); }
};

const cS = new CircleS();
cS.draw();

const drawS = cS.draw;
console.log(drawS);
drawS();