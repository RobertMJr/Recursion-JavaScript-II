// Write a recursive function called someRecursive
// Accepts an array and a callback
// It returns true if a single value in the array returns true
// when passed to the callback
// Otherwise it returns false

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false
function someRecursive(arr, cb) {
	if (arr.length === 0) {
		return false;
	}
	let result = cb(arr[0]);
	if (result === true) {
		return result;
	}
	arr = arr.slice(1);
	return someRecursive(arr, cb);
}

function isOdd(num) {
	return num % 2 !== 0;
}

function someRecursiveBetter(arr, cb) {
	if (!arr.length) return false;
	const [ num, ...rest ] = arr;
	console.log(`num is: ${num}`);
	console.log(`rest is: ${rest}`);
	return cb(num) || someRecursiveBetter(rest, cb);
}

console.log(someRecursive([ 1, 2, 3, 4 ], isOdd));
console.log(someRecursive([ 4, 6, 8 ], isOdd));
console.log(someRecursive([ 4, 6, 8 ], (val) => val > 10));

console.log(someRecursiveBetter([ 2, 3, 4 ], isOdd));
