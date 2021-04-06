// Write a function called capitalizeWords
// Given an array of words, return a new array containing each word capitalized.

function capitalizedWords(arr) {
	let result = [];
	if (arr.length === 0) {
		return result;
	}
	result.push(arr[0].toUpperCase());
	return result.concat(capitalizedWords(arr.slice(1)));
}

let words = [ 'i', 'am', 'learning', 'recursion' ];
console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
