// This is a solution for
// https://www.hackerrank.com/challenges/detect-whether-a-linked-list-contains-a-cycle/problem
let LinkedList = require('./LinkedList');
let SinglyLinkedList = LinkedList.SinglyLinkedList;

let head = new SinglyLinkedList();
head.insertNode(1);
head.insertNode(1);
head.insertNode(3);
head.insertNode(1);
head.insertNode(2);
head.insertNode(3);

// Complete the hasCycle function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function hasCycle(head) {
  let m = new Map();
  let pointer = head;
  let result = 0;
  let temp;
  while(pointer.next !== null) {
    if (m.has(pointer.data)){
      temp = m.get(pointer.data);
      for(let i=0; i<temp.length; i++){
        if(temp[i] == pointer) {
          result = 1;
          break;
        }
      }
      if(result === 1) {
        pointer.next = null;
      } else {
        temp.push(pointer);
        m.set(pointer.data, temp);
      }
    } else {
      m.set(pointer.data, [pointer]);
      pointer = pointer.next;
    }
  }
  return result;
}

console.log(hasCycle(head.head));


// The setup project has an error, a TypeError.
// Clearly there is a const re-assignation.
// const temp = llist.head;

// for (let i = 0; i < llistCount; i++) {
//     if (i == index) {
//       extra = temp;
//     }

//     if (i != llistCount-1) {
//       temp = temp.next;
//     }
// }