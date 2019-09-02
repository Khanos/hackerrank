
// Class Stack
const Stack = () => {
    let interface = {};
    let items = [];

    interface.push = (element) => {return items.push(element)};

    interface.pop = () => {return items.pop()};

    interface.peek = () => {return items[items.length - 1]};

    interface.isEmpty = () => {return items.length == 0};

    interface.size = () => {return items.length};

    interface.clear = () => {items = []};

    interface.print = () => {console.log(items.toString())};

    return interface;
}

module.exports = Stack