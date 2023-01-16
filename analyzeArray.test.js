const analyzeArray = require('./codeForTests').analyzeArray;

test('Analyze array [1,8,3,4,2,6]', () => {
	let result = [1,8,3,4,2,6];
	expect(analyzeArray(result)).toEqual({
		'average': 4,
		'min': 1,
		'max': 8,
		'length': 6
	});
});

test('Analyze array [5,2,7,31]', () => {
	let result = [5,2,7,31];
	expect(analyzeArray(result)).toEqual({
		'average': 11.25,
		'min': 2,
		'max': 31,
		'length': 4
	});
});

test('Analyze array [0,0,0,2,0]', () => {
	let result = [0,0,0,2,0];
	expect(analyzeArray(result)).toEqual({
		'average': 0.4,
		'min': 0,
		'max': 2,
		'length': 5
	});
});
