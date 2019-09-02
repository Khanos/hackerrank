function Queue() {
    let interface = {};
    let items = [];

    interface.enqueue = (element) => {
        items.push(element);    
    }

    interface.dequeue = () => {
        return items.shift()
    }

    interface.front = () => {
        return items[0];
    }

    interface.isEmpty = () => {
        return items.length == 0;
    }

    interface.size = () => {
        return items.length
    }

    interface.print = () => {
        console.log(items.toString());
    }

    interface.clear = () => {
        items = [];
    }

    return interface;
}

module.exports = Queue