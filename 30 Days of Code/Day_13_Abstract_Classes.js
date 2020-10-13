'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
    _input = _input.split(new RegExp('\n'));
    main();
});
function readLine() { return _input[_index++]; }

/**** Ignore above this line. ****/

class Book {
    constructor(title, author) {
        if (this.constructor === Book) {
            throw new TypeError('Do not attempt to directly instantiate an abstract class.');
        }
        else {
            this.title = title;
            this.author = author;
        }
    }

    display() {
        console.log('Implement the \'display\' method!')
    }
}

class MyBook extends Book {
// Declare your class here.
    /**
    *   Class Constructor
    *
    *   @param title The book's title.
    *   @param author The book's author.
    *   @param price The book's price.
    **/
    // Write your constructor here
    constructor(title, author, price) {
        super();
        this.title = title;
        this.author = author;
        this.price = price;
    }
    /**
    *   Method Name: display
    *
    *   Print the title, author, and price in the specified format.
    **/
    // Write your method here
    display() {
        console.log(`Title: ${this.title}\nAuthor: ${this.author}\nPrice: ${this.price}`);
    }
// End class
}

function main() {