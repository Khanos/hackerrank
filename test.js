const AsyncQueue = require('./utils/AsyncQueue');
const queue = new AsyncQueue();

queue.on('enqueued', (item) => {
    console.log('enqueued:', item);
});
queue.on('dequeued', (item) => {
    console.log('dequeued:', item);
});

for(let i = 0; i < 50; i++) {
    queue.enqueue(i);
}


console.log(queue.peek());
console.log(queue.print().toString());
console.log(queue.getCurrentInterval());

queue.start();

setTimeout(() => {
    queue.pause();
    queue.emit('interval', 1000);
    console.log(queue.getCurrentInterval());
} , 3000);
setTimeout(() => {
    queue.start();
}, 4000);
setTimeout(() => {
    queue.pause();
} , 5000);
setTimeout(() => {
    queue.start();
} , 8000);
