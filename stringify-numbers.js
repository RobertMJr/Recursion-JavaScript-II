// Write a function called stringifyNumbers
// Takes in an object and finds all of the values
// which are numbers and converts them to strings.

function stringifyNumbers(obj) {
	let newObj = {};
	for (let key in obj) {
		if (typeof obj[key] === 'number') {
			newObj[key] = obj[key].toString();
		} else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
			newObj[key] = stringifyNumbers(obj[key]);
		} else {
			newObj[key] = obj[key];
		}
	}
	return newObj;
}

let obj = {
	num: 1,
	test: [ 2, 3 ],
	data: {
		val: 4,
		info: {
			isRight: true,
			random: 66
		}
	}
};

const recursiveStringifyNums = (obj) => {
	let o = Object.assign({}, obj);

	const helper = (o) => {
		// needs helper() with value declared outside recursion. If not, recursion will reset value, since its when defined at start.
		for (let prop in o) {
			if (typeof o[prop] === 'object' && o[prop] !== null) {
				// check if object
				helper(o[prop]); // recursive part
			} else if (typeof o[prop] === 'number')
				o[prop] = o[prop].toString();
			// otherwise, don't mutate
		}
		return o;
	};
	return helper(o);
};

function stringifyNumbersBetter(obj) {
	if (!Object.keys(obj).length) return {};

	const key = Object.keys(obj)[0];
	const { [key]: val, ...left } = obj;

	if (typeof val === 'number') {
		obj[key] = String(val);
	} else if (typeof val === 'object' && !Array.isArray(val)) {
		obj[key] = stringifyNumbersBetter(val);
	}
	return {
		...obj,
		...stringifyNumbersBetter(left)
	};
}

console.log(stringifyNumbers(obj));
console.log(recursiveStringifyNums(obj));
console.log(stringifyNumbersBetter(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
