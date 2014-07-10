
var isPrime = function (num) {

	for (i=2;i<num;i++) {
		if(num%i === 0) {
			return false;
		}
	}

	return true;
}

console.log("16 is prime? -->", isPrime(16));
console.log("237 is prime? -->", isPrime(237));
console.log("7 is prime? -->", isPrime(7));

module.exports = isPrime;