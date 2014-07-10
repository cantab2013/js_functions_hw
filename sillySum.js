var arr = [6, 3, 2, 1];

var sillySum = function (arr) {
	
	var count = 0;
	
	for (i=0;i<arr.length;i++) {
		count += (arr[i] * i);
	}

	return count;
}

console.log("Array: ", arr);
console.log("sillySum is:", sillySum(arr));
