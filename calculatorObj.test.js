const calculator = require('./codeForTests').calculator;

describe('Testing calculator functions', () => {
	let add = (a, b) => {
		return calculator.add(a,b);
	}

	let subtract = (a, b) => {
		return calculator.subtract(a, b);
	}

	let multiply = (a, b) => {
		return calculator.multiply(a, b);
	}

	let divide = (a, b) => {
		return calculator.divide(a, b);
	}

	// Testing the 'add' function
	test('Add 2 + 5', () => {
		expect(add(2, 5)).toBe(7);
	})

	test('Add (-3) + (-4)', () => {
		expect(add(-3, -4)).toBe(-7);
	});

	test('Add 10 + 0', () => {
		expect(add(10, 0)).toBe(10);
	});

	test('Add 777 + (-521)', () => {
		expect(add(777, -521)).toBe(256);
	});

	test('Add 8.4 + 1.25', () => {
		expect(add(8.4, 1.25)).toBe(9.65);
	});

	// Testing the 'subtract' function
	test('Subtract 7 - 5', () => {
		expect(subtract(7, 5)).toBe(2);
	});

	test('Subtract (-2) - (-4)', () => {
		expect(subtract(-2, -4)).toBe(2);
	});

	test('Subtract 0 - 1', () => {
		expect(subtract(0, 1)).toBe(-1);
	});

	test('Subtract 1000 - 1000', () => {
		expect(subtract(1000, 1000)).toBe(0);
	});

	// Testing the 'multiply' function
	test('Multiply 3 * 1', () => {
		expect(multiply(3, 1)).toBe(3);
	});

	test('Multiply 10 * 10', () => {
		expect(multiply(10, 10)).toBe(100);
	});

	test('Multiply -8 * 7', () => {
		expect(multiply(-8, 7)).toBe(-56);
	});

	test('Multiply 0 * 330', () => {
		expect(multiply(0, 330)).toBe(0);
	});

	test('Multiply 99 * 99', () => {
		expect(multiply(99, 99)).toBe(9801);
	});

	// Testing the 'divide' function
	test('Divide 125 / 5', () => {
		expect(divide(125, 5)).toBe(25);
	});

	test('Divide 246 / 3', () => {
		expect(divide(246, 3)).toBe(82);
	});

	test('Divide 12 / 1', () => {
		expect(divide(12, 1)).toBe(12);
	});

	test('Divide 654 / 0', () => {
		expect(divide(654, 0)).toBe(null);
	});
});
