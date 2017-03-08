// JavaScript has function scoping. What this means is that the variables that you declare with var inside a function are accessible only inside the function they are declared in.
function addNumbers(a,b) {
	var sum = a + b;
	return sum;
}
console.log(sum);  // error! the variable sum isn't defined , outside the function addNumber

// Now with the nest functions: 

function addArrayElements(array) {
	var array_sum = 0;
	var array_length = array.length;
	for (var i = 0; i < array_length; i ++) {
		addNumbers(array_sum, array[i]);
	}
	function addNumbers(a,b) {
		var sum = a+b;
		return sum;
	}
	return array_sum;
}
var new_sum = addArrayElements ([3,4,5]);


// available variables:
//sum
// array_sum
// array_length
// i

// addArrayElements scope
// available variable:
// array_sum
// array_length
// i
