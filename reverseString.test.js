const reverse = require('./codeForTests').reverse;

test('Reverse 1 word', () => {
  let result = reverse('word');
	expect(result).toBe('drow');
})

test('Reverse sentence', () => {
	let result = reverse('odin project is cool');
	expect(result).toBe('looc si tcejorp nido');
});

test('Reverse palindrome', () => {
	let result = reverse('12122121');
	expect(result).toBe('12122121');
});
