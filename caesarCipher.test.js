const caesarCipher = require('./codeForTests').caesarCipher;

test('Caesar Cipher encoding "The quick fox"', () => {
    let result = caesarCipher('The quick fox');
    expect(result).toBe('Uif rvjdl gpy');
});

test('Caesar Cipher encoding "i Want, Doge coin!"', () => {
    let result = caesarCipher('i Want, Doge coin!');
    expect(result).toBe('j Xbou, Ephf dpjo!');
});
