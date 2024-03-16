/* Implement any of  Array.prototype functions: map (myMap)
inputArray = [1, 2, 3, 4, 5]
function map(inputArray, callback) => output [2, 4, 6, 8, 10] */

// MAP
Array.prototype.mapf = function (callback) {
	let newArr = [];
	let x = this.length;
	for (let i = 0; i < x; i++) {
		let c = callback(this[i]);
		newArr.push(c);
	}
	return newArr;
};

let a = [1, 2, 3, 4];
console.log(a.mapf((e) => e * 2));

/* cb([1, 2, 3, 4, 5]);
 */
mapf([1, 2, 3, 4, 5], cb);

[1, 2, 3, 4, 5].mapf(cb);

//FILTER

Array.prototype.filterf = function(callback){
  let newArr = [];
  for(let i=0;i<this.length;i++){
    if(callback(this[i],i, this)){
      newArr.push(this[i]);
    }
  }
  return newArr;
}

/* ✅Create a sum(), which makes following possible
const sum1 = sum(1)
sum1(2) == 3 // true
sum1(3) == 4 // true
sum(1)(2)(3) == 6 // true
sum(5)(-1)(2) == 6 // true  */

function sum(num) {
	// your code here
	const func = function (num2) {
		return num2 ? sum(num + num2) : num;
	};
	func.valueOf = () => num;
	return func;
}

const sum1 = sum(1);
console.log(sum1());
console.log(sum1(2)()); // true
console.log(sum1(3)()); // true
console.log(sum(1)(2)(3)()); // true
console.log(sum(5)(-1)(2)()); // true

/*  ✅ Convert all keys within an object into snake_case/camelCase
 inputObject = { "firstName": "John", "lastName": "Doe", "age": 25 }
 function convertKeys(inputObject) => output { "first_name": "John","last_name": "Doe", "age": 25 } */
inputObject = { firstName: "John", lastName: "Doe", age: 25 };

function snakeToCamel(str) {
	// your code here
	return str.replace(
		/([^_])_([^_])/g,
		(_, before, after) => before + after.toUpperCase()
	);
}

console.log(snakeToCamel("snake_case"));

inputArray = [1, 2, [3, 4], 5, [[[6, 7], 8, [[[[9]]]]]]];

const flatten = (inputArray) => {
	let [a, b, c, d, e] = [...inputArray];
	let [m] = [...[...e]];
	console.log([...m]);
};

/* flatten(inputArray);
 */
/* Write a method which will return the first non-repeated character ina string
inputString = "abcbad"
function firstNonRepeatedCharacter(inputString) => output "c" */
let firstNonRepeatedCharacter = (inp) => {
	let o = {};
	let o1 = {};
	inp.split("").forEach((i) => {
		if (o[i] !== undefined) {
			o[i] = o[i] + 1;
		} else {
			o[i] = 1;
		}
	}); /*  console.log(...new Set(inp)) */
	/*  console.log(o);
	 */
};

/*  firstNonRepeatedCharacter("abcbad")
 */
