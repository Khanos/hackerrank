// Test imputs
var array = [6,5,4,3,2,1],
	exceptions = [0,3,5];
console.log('imputs', array, exceptions);

// Solution
var index = 0;
var exc_hash = {};
for (let value of exceptions){
	exc_hash[array[value]] = value;
	index++
}
//console.log(exc_hash);

// pop out the exceptions
var newArray = [];
for (let value of array){
	if(typeof exc_hash[value] == 'undefined'){
		newArray.push(value);
	}
}
newArray.sort(); // i know, i know it's a buildin soultion, but it uses  InsertionSort and QuickSort
//console.log('newArray without exceptions', newArray)

// Creating the new sorted array with the exceptions in place
var sortedArray = []
index = 0;
for (let value of array){
	if(typeof exc_hash[value] != 'undefined'){
		sortedArray.push(value);
	} else {
		sortedArray.push(newArray[index]);
		index++;
	}
}

// Printing out the solution, in the test was a return of a function
console.log('New Sorted Array', sortedArray);




			function sayhi (name) {
				console.log('Hi, ', name);
			};

			for (let i = 0; i<10 ; i++){
				let j = i+2;
				console.log(i); // Simple Log
				console.log(i, j); // Multiple Variables
				console.log('This is: %d', i); // Format as Integer
				console.log('%O', i); // The Object representation
				console.clear(); // Clear out the console log
				console.count('How many times?'); // Counts the calls
				console.trace(); // Print the stack trace, really cool huh?
				console.time('do_something'); // Start a timer
				sayhi('world'); // doing something
				console.timeEnd('do_something'); // End and show the timer
				console.error('A bad thing happen'); // Prints the stderr stream
				console.log('\x1b[33m%s\x1b[0m', 'This is yellow!');
			}





