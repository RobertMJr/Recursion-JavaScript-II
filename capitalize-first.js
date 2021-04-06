// Write a recursive function called capitalizeFirst.
// Given an array of strings, capitalize the first letter
// of each string in the array

function capitalizeFirst(arr) {
	let first = [];
	if (arr.length === 0) {
		return first;
	}
	first.push(arr[0][0].toUpperCase() + arr[0].slice(1));
	arr = arr.slice(1);
	return first.concat(capitalizeFirst(arr));
}

function capitalizeFirstBetter(arr, first = []) {
	if (arr.length === 0) {
		return first;
	}
	first.push(arr[0][0].toUpperCase() + arr[0].slice(1));
	return first.concat(capitalizeFirst(arr.slice(1), first));
}

console.log(capitalizeFirst([ 'car', 'taco', 'banana' ])); // ['Car','Taco','Banana']
console.log(capitalizeFirstBetter([ 'car', 'taco', 'banana' ])); // ['Car','Taco','Banana']
