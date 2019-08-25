
// Class Stack
const Stack = () => {
    var items = [];

    this.push = (element) => {return items.push(element)};

    this.pop = () => {return items.pop()};

    this.peek = () => {return items[items.length - 1]};

    this.isEmpty = () => {return items.length == 0};

    this.size = () => {return items.length};

    this.clear = () => {items = []};

    this.print = () => {console.log(items.toString())};

    return this;
}

module.exports = Stack