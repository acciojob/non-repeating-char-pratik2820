//your JS code here. If required.
function findFirstNonRepeatedChar(str) {
  const charCount = {};

  // Count the occurrences of each character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first non-repeated character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char] === 1) {
      return char;
    }
  }

  return '';
}

// Example usage:
const input = prompt('Enter a string:');
const result = findFirstNonRepeatedChar(input);
alert(result)
