module.exports = function solveEquation(equation) {
	const arr = equation.split(" ");
	const a = arr[0];
	const b = arr[3].concat(arr[4]);
	const c = arr[7].concat(arr[8]);

	const D = eval(b ** 2 - 4 * a * c);
	const x1 = Math.round(eval((-b + Math.sqrt(D)) / (2 * a)));
	const x2 = Math.round(eval((-b - Math.sqrt(D)) / (2 * a)));

	const sqrtArr = [];
	sqrtArr.push(x1, x2);
	sqrtArr.sort(function (a, b) {
		return a - b
	});
	return sqrtArr;
};
