const EventEmitter = require('events');

class AsyncQueue extends EventEmitter {
    constructor() {
        super();
        this.queue = [];
        this.interval = 250;
        this.isRunning = false;
        this.dequeueInterval = null;
        this.on('interval', (newInterval) => {
            if(parseInt(newInterval) > 0) {
                this.interval = parseInt(newInterval);
            }
        } );
    }

    // add an element to the queue
    // emit a 'queue-changed' event when the queue changes
    enqueue(item) {
        this.queue.push(item);
        this.emit('enqueued', item);
    }
    // return the first element in the queue
    peek(){
        return this.queue[0];
    }
    print(){
        return this.queue;
    }
    getCurrentInterval(){
        return this.interval;
    }
    // Dequeue all items in the queue at intervals of 250ms
    dequeue() {
        this.dequeueInterval = setInterval(() => {
            if(this.queue.length > 0) {
                this.emit('dequeued', this.queue.shift());
            } 
            // else {
            //     this.pause();
            // }
        }, this.interval);
    }
    // Pause the dequeue process
    pause() {
        clearInterval(this.dequeueInterval);
        this.dequeueInterval = null;
        this.isRunning = false;
    }
    // Starts the dequeue process
    start() {
        this.isRunning = true;
        this.dequeue();
    }
}


module.exports = AsyncQueue;