const capitalize = (string) => {
  let firstLetter = string[0].toUpperCase();
	return firstLetter + string.slice(1);
}

const reverse = (string) => {
	return string.split('').reverse().join('');
}

const calculator = {
	add: function(a, b) {
		return a + b;
	},

	subtract: function(a, b) {
		return a - b;
	},

	multiply: function(a, b) {
		return a * b;
	},

	divide: function(a, b) {
		return a / b;
	}
}

const caesarCipher = (string) => {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	const alphabetUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let cipher = '';
	let cipherUpperCase = '';

	function shift(n) {
		for (let i = 0; i < alphabet.length; i++) {
			let offset = (i + n) % alphabet.length;
			cipher += alphabet[offset];
			cipherUpperCase += alphabetUpperCase[offset];
		}
	}

	function encode(msg) {
		let result = '';
		for (let i = 0; i < msg.length; i++) {
			let character = msg[i];

			if (character.match(/^[A-Za-z]/i)) {
				let charCode = msg.charCodeAt(i);
				if (charCode >= 65 && charCode <= 90) {
					let index = alphabetUpperCase.indexOf(character);
					result += cipherUpperCase[index];
				} else if (charCode >= 97 && charCode <= 122) {
					let index = alphabet.indexOf(character);
					result += cipher[index];
				}
			} else {
				result += character;
			}

		}

		return result;
	}

	shift(1);
	return encode(string);
}

const analyzeArray = (array) => {
	let size = array.length;
	let sum = 0;
	let min = array[0];
	let max = array[0];

	for (let i = 0; i < size; i++) {
		sum += array[i];
		if (array[i] < min) {
			min = array[i];
		}
		if (array[i] > max) {
			max = array[i];
		}
	}

	let avg = sum / size;

	return {
		'average': avg,
		'min': min,
		'max': max,
		'length': size
	};
}

module.exports = {
  capitalize,
	reverse,
	calculator,
	caesarCipher,
	analyzeArray
}
