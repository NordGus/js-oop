function HtmlElement() {
    this.click = () => {
        console.log('clicked');
    };
}

HtmlElement.prototype.focus = function() {
    console.log('focused');
}

function HmtlSelectElement(items = []) {
    this.items = items;

    this.addItem = item => {
        this.items.push(item);
    };

    this.removeItem = item => {
        this.items.splice(this.items.indexOf(item), 1);
    };
}

HmtlSelectElement.prototype = new HtmlElement();
HmtlSelectElement.prototype.constructor = HmtlSelectElement;

const element = new HtmlElement();
const selectElement = new HmtlSelectElement();

console.log('inspect element', element);
console.log('inspect selectElement', selectElement);

selectElement.addItem('1');
selectElement.addItem('2');
selectElement.addItem('3');
selectElement.addItem('4');
console.log('after adding elements', selectElement);

selectElement.removeItem('4');
selectElement.removeItem('2');
console.log('after removing elements', selectElement);

element.click();
element.focus();

selectElement.click();
selectElement.focus();