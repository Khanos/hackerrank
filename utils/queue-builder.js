function Queue() {
    let items = [];

    this.enqueue = (element) => {
        items.push(element);    
    }

    this.dequeue = () => {
        return items.shift()
    }

    this.front = () => {
        return items[0];
    }

    this.isEmpty = () => {
        return items.length == 0;
    }

    this.size = () => {
        return items.length
    }

    this.print = () => {
        console.log(items.toString());
    }

    this.clear = () => {
        items = [];
    }

    return this;
}

module.exports = Queue