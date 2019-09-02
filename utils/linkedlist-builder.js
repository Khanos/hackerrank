function LinkedList() {
    let interface = {};
    function Node(element) {
        interface.element = element;
        interface.next = null;
    }
    let length = 0;
    let head = null;

    interface.append = (element) => {
        let node = new Node(element);
        let current;
        if(head == null){
            head = node;
        } else {
            current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        length++;
    };

    interface.removeAt = (position) => {
        if (position >= 0 && position < length) {
            let current = head;
            let previous;
            let index = 0;

            if (position === 0){
                head = current.next
            } else {
                while (index++ < position){
                    previous = current;
                    current = current.next
                }
                previous.next = current.next;
                length--;
                return current.element;
            } 
        } else {
         return null;       
        }
    };

    interface.insert = (position, element) => {
        if (position >= 0 && position <= length) {
            let node = new Node(element);
            let current = head;
            let previous;
            let index = 0;

            if (position == 0) {
                node.next = current;
                head = node;
            } else {
                while (index++ < position){
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            length++;
            return true;
        } else {
            return false;
        }
    };

    interface.toString = () => {
        let current = head;
        let string = '';
        while(current){
            string += ' ' + current.element;
            current = current.next;
        }
        return string;
    };

    interface.indexOf = (element) => {
        let current = head;
        let index = 0;
        while(current){
            if(element === current.element){
                return index
            }
            index++;
            current = current.next;
        }
        return -1;
    };

    interface.isEmpty = () => {
        return length === 0;
    };

    interface.size = () => {
        return length;
    };

    interface.getHead = () => {
        return head;
    };
}

module.exports = LinkedList;