// Write a recursive function called isPalindrome which returns true
// if the string passed to it is a palindrome (reads the same forward and backward)
// Otherwise return false

function isPalindrome(str) {
	if (str.length <= 1) {
		return true;
	}
	if (str.slice(0, 1) === str.slice(-1)) {
		return isPalindrome(str.slice(1, -1));
	}
	return false;
}

console.log(isPalindrome('awesome'));
console.log(isPalindrome('tacocat'));
console.log(isPalindrome(''));
