const capitalize = require('./codeForTests').capitalize;

test('Capitalize a single word', () => {
	const result = capitalize('dogecoin');

	expect(result).toBe('Dogecoin');
})

test('Capitalize the first word of a sentence', () => {
	const result = capitalize('the first letter should be a T');

	expect(result).toBe('The first letter should be a T');
})

test('Capitalizing !', () => {
	const result = capitalize('!');

	expect(result).toBe('!');
})
