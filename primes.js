//var isPrime = require("./isPrime.js");

var isPrime = function (num) {

	for (var i=2;i<num;i++) {
		if(num%i === 0) {
			return false;
		}
	}

	return true;
}

var max = 100;

var primes = function (max) {
	
	var arr = [];

	for (var i=2; i<=max; i++) {

		if(isPrime(i)) {
			arr.push(i);
		}
	}

	return arr;
}

console.log("Primes <= "+max+":", primes(max));
