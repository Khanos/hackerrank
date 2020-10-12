// Complete the factorial function below.
const trampoline = fn => (...args) => {
	let result = fn(...args);
	while (typeof result === 'function') {
		result = result();
	}
	return result;
}

const factorial = (n) => {
  if (n == 1) return 1;
	return () => n * factorial(n-1)
}

const tfactorial = trampoline(factorial);
const result = tfactorial(100)
console.log(result)
