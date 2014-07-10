var arr1 = [3,6,11], arr2 = [2,4,5,8,9];

var merge = function (arr1, arr2) {

	var combined = [], combineLength = arr1.length + arr2.length;

	for(i=0;i<combineLength;i++) {
			if(arr1.length === 0) { 
				combined.push(arr2[0]);				
			}
			else if (arr2.length === 0) {
				combined.push(arr1[0]);				
			} 
			else {
				if (arr1[0] <= arr2[0]) {
					combined.push(arr1[0]);
					arr1.shift();
				}
				else {
					combined.push(arr2[0]);		
					arr2.shift();
				}
			} 
	}
	return combined;
}

console.log("Array 1 is:", arr1);
console.log("Array 2 is:", arr2);
console.log("Combined sorted array is:", merge(arr1, arr2));

