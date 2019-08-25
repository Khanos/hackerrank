function PriorityQueue(){
    let items = [];

    // Queue Constructor
    function QueueElement(element, priority){
        this.element = element;
        this.priority = priority;
    }

    this.enqueue = (element, priority) => {
        let queueElement = new QueueElement(element, priority);
        if (this.isEmpty()){
            items.push(queueElement);
        } else {
            let added = false;
            items.forEach((item, index) => {
                if(queueElement.priority < item.priority){
                    items.splice(index, 0, queueElement);
                    added = true;
                }
            });
            if (!added) {
                items.push(queueElement);
            }
        }
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
        items.forEach((item)=>{
            console.log(item);
        })
        
    }

    this.clear = () => {
        items = [];
    }

    return this;
}

module.exports = PriorityQueue