/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function mergeLists(head1, head2) {
    let resultArr = [];
    let keepGoing = true;
    while(keepGoing) {
        const listOneValue = head1 ? head1.data : null;
        const listTwoValue = head2 ? head2.data : null;
        
        resultArr.push(listOneValue);
        resultArr.push(listTwoValue);
        
        head1 = head1 ? head1.next : null;
        head2 = head2 ? head2.next : null;
        
        if(!listOneValue && !listTwoValue) {
            keepGoing = false;
        }
    }
    resultArr = [...resultArr.filter(el => el)].sort((a,b) => a-b);
    let mergedLList = new SinglyLinkedList();
    resultArr.forEach(el => {
        mergedLList.insertNode(el);
    })
    return mergedLList.head;
}