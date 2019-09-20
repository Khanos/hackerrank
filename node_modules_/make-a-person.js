function Person(firstAndLast) {
    // Complete the method below and implement the others similarly
    let firstName = firstAndLast.split(' ')[0];
    let lastName = firstAndLast.split(' ')[1];
    let fullName = firstAndLast;
    this.getFirstName = function() {
        return firstName;
    };
    this.getLastName = function() {
        return lastName;
    };
    this.getFullName = function() {
        return firstName + ' ' + lastName;
    };
    this.setFirstName = function(first) {
        firstName = first;
    };
    this.setLastName = function(last) {
        lastName = last;
    };
    this.setFullName = function(firstAndLast){
        firstName = firstAndLast.split(' ')[0];
        lastName = firstAndLast.split(' ')[1];
        fullName = firstAndLast;
    };
};
var bob = new Person('Bob Ross');
console.log(bob.getFullName());
console.log(bob.setFullName("Haskell Curry"));
console.log('DONE:    ', bob instanceof Person);
console.log(Object.keys(bob).length);