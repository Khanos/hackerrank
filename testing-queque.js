let QueueBuilder = require('./utils/queue-builder');
let PriorityQueueBuilder = require('./utils/priority-queue-builder');
let queue = new QueueBuilder();
let priorityqueue = new PriorityQueueBuilder();

console.log(queue.isEmpty());
queue.enqueue("Jhon");
queue.enqueue("Mike");
queue.enqueue("Rafa");
queue.print();
console.log(queue.size());
console.log(queue.isEmpty());
queue.dequeue();
queue.dequeue();
queue.print();
console.log('----------------------------')
console.log(priorityqueue.isEmpty());

priorityqueue.enqueue('Jhon', 2);
priorityqueue.enqueue('Jack', 1);
console.log(priorityqueue.size());

priorityqueue.print();

console.log('----------------------------')
priorityqueue.enqueue('Camila', 1);
priorityqueue.print();