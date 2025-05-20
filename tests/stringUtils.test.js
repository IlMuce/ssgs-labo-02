const { 
  reverseString, 
  isPalindrome, 
  truncateString, 
  countCharacters 
} = require('../src/stringUtils');

describe('stringUtils', () => {
  // Inverti Stringa
  test('reverseString: stringa normale', () => {
    expect(reverseString('abcde')).toBe('edcba');
  });
  test('reverseString: stringa vuota', () => {
    expect(reverseString('')).toBe('');
  });

  // Controlla Palindromo
  test('isPalindrome: vero per "otto"', () => {
    expect(isPalindrome('otto')).toBe(true);
  });
  test('isPalindrome: falso per "ciao"', () => {
    expect(isPalindrome('ciao')).toBe(false);
  });

  // Tronca Stringa
  test('truncate: taglia a 3 caratteri', () => {
    expect(truncateString('abcdef', 3)).toBe('abc...');
  });
  test('truncate: n maggiore lunghezza', () => {
    expect(truncateString('abc', 10)).toBe('abc');
  });
  test('truncate: n uguale a 0', () => {
    expect(truncateString('abc', 0)).toBe('...');
  });

  // Conta Caratteri
  test('countChars: conteggio corretto', () => {
    expect(countCharacters('aabb')).toEqual({ a: 2, b: 2 });
  });
  test('countChars: stringa vuota', () => {
    expect(countCharacters('')).toEqual({});
  });
});
