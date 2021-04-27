const _items = new WeakMap();

class Stack {
    constructor() {
        _items.set(this, []);
    }

    get count() {
        return _items.get(this).length;
    }

    peek() {
        const items = _items.get(this);

        if (items.length <= 0) throw new Error('Stack is empty');

        return items[items.length - 1];
    }

    push(obj) {
        _items.get(this).push(obj);
    }

    pop() {
        const items = _items.get(this);
        
        if (items.length <= 0) throw new Error('Stack is empty');
        
        return items.pop();
    }
}


const stack = new Stack();

stack.push('a');
stack.push('b');
stack.push('c');
stack.push('d');

for (let i = 0; i < 5; i++) {
    console.log('count:', stack.count);
    
    try {
        console.log('peek:', stack.peek());
    } catch (error) {
        console.error(error);
    }
    
    try {
        console.log('pop:', stack.pop());
    } catch (error) {
        console.error(error);
    }
}