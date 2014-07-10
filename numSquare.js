//try not to use Math.sqrt()

var max = 100;

var numSquare = function (max) {

	var arr = [];

	for (i=1; i*i<=max; i++) {
		arr.push(i*i);
	}

	return arr;
}

console.log("Perfect squares <= "+max+":", numSquare(max));
