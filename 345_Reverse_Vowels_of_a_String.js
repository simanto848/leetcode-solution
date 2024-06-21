/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let vowels = s.match(/[aeiou]/gi);
  return s.replace(/[aeiou]/gi, () => vowels.pop());
};
