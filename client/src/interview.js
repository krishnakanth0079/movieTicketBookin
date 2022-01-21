//finding max number in array
//m1------------------------
let myArray = [ 2, 5, 10, 11 ];
var x = [ 2, 9, 5, 15, 12, 34 ];
console.log(Math.max(...x));
//m2----------------------
let arr = [ 4, 5, 6, 7, 8, 9, 10 ];
temp = 0;

arr.forEach((element) => {
	if (temp < element) {
		temp = element;
	}
});

console.log(`The largest number in the array: ${temp}`);
//m3
let arr = [ 4, 5, 6, 7, 8, 9, 10 ];
temp = 0;

arr.map((element) => {
	if (temp < element) {
		temp = element;
	}
});

console.log(`The largest number in the array: ${temp}`);

//---------------------------------------------------------------------------------------------------
//Q2 find prime number in giver array
function checkPrime(number) {
	if (number <= 1) {
		return false;
	} else {
		for (let i = 2; i < number; i++) {
			if (number % i == 0) {
				return false;
			}
		}
	}
}
