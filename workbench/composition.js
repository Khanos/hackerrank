const users = [
	{ id: 1, firstname: 'Epilef', lastname: 'Rodriguez' }
]

const getFirst = x => x[0];
const toUpperCase = x => ( { firstname: x.firstname.toUpperCase(), lastname: x.lastname.toUpperCase() } );
const getFullName = x => `${ x.lastname }, ${ x.firstname }`;

const composer = (...fns) => x => fns.reduceRight((y, fn) => fn(y), x);

const main = composer(getFullName, toUpperCase, getFirst);

// Execution
const result = main(users)
console.log(result);
