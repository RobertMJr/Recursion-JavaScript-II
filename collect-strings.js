// Write a function called collectStrings which accepts an object and returns an array
// of all the values in the object that have a type of string

function collectStringsBetter(obj) {
	let result = [];
	if (!Object.keys(obj).length) return result;

	const key = Object.keys(obj)[0];
	const { [key]: val, ...left } = obj;

	if (typeof val === 'string') {
		result.push(val);
	} else if (typeof val === 'object') {
		return collectStringsBetter(val);
	}
	return result.concat(collectStringsBetter(left));
}

function collectStrings(obj) {
	let result = [];
	for (let key in obj) {
		if (typeof obj[key] === 'string') {
			result.push(obj[key]);
		} else if (typeof obj[key] === 'object') {
			return result.concat(collectStrings(obj[key]));
		}
	}
	return result;
}

function collectStrings2(obj) {
	var stringsArr = [];
	for (var key in obj) {
		if (typeof obj[key] === 'string') {
			stringsArr.push(obj[key]);
		} else if (typeof obj[key] === 'object') {
			stringsArr = stringsArr.concat(collectStrings(obj[key]));
		}
	}

	return stringsArr;
}

const obj = {
	stuff: 'foo',
	data: {
		val: {
			thing: {
				info: 'bar',
				moreInfo: {
					evenMoreInfo: {
						weMadeIt: 'baz'
					}
				}
			}
		}
	}
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
console.log(collectStrings2(obj)); // ["foo", "bar", "baz"])
console.log(collectStringsBetter(obj)); // ["foo", "bar", "baz"])
