// Write a function called reverse
// Accepts a string and returns a new string in reverse

function reverse(str) {
	let result = '';
	if (str.length === 0) {
		return result;
	}
	let last = str.slice(-1);
	result = result.concat(last);
	str = str.slice(0, -1);
	result = result.concat(reverse(str));
	return result;
}

function reverseBetter(str) {
	if (str.length === 1) {
		return str;
	}
	return str.slice(-1) + reverseBetter(str.slice(0, -1));
}

console.log(reverse('awesome')); // 'emosewa'
console.log(reverseBetter('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loochsmhtir'
console.log(reverseBetter('rithmschool')); // 'loochsmhtir'
