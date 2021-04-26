function HtmlElement() {
    this.click = () => {
        console.log('clicked');
    };
}

HtmlElement.prototype.focus = function() {
    console.log('focused');
}

HtmlElement.prototype.render = function() {
    return '<span>Not Implemented</span>'
}

function HmtlSelectElement(items = []) {
    this.items = items;

    this.addItem = item => {
        this.items.push(item);
    };

    this.removeItem = item => {
        this.items.splice(this.items.indexOf(item), 1);
    };

    this.render = () => {
        return `
<select>
        ${this.items.map(item => `<option>${item}</option>`).join('\n\t')}
</select>
        `;
    }
}

HmtlSelectElement.prototype = new HtmlElement();
HmtlSelectElement.prototype.constructor = HmtlSelectElement;

function HtmlImageElement(src = '') {
    this.src = src;

    this.render = () => {
        return `<img src="${this.src}" />`;
    }
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

const elements = [
    new HmtlSelectElement([1, 2, 3]),
    new HtmlImageElement('http://')
];

for (const element of elements)
    console.log(element.render());