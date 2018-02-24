module.exports = function solveEquation(equation) {
  // your implementation
		this.equation = equation;
	var arr = this.equation.split(" ");
	var a = arr[0],
		b = arr[3].concat(arr[4]),
		x = arr[6],
		c = arr[7].concat(arr[8]);

	var D = eval(b * b - 4 * a * c),
		x1 = Math.round(eval((-b + Math.sqrt(D))/(2*a))),
		x2 = Math.round(eval((-b - Math.sqrt(D))/(2*a)));
	
	var sqrt_arr = [];
	sqrt_arr.push(x1, x2);
	sqrt_arr.sort(function(a, b){
		return a-b
	})
	return sqrt_arr
}
