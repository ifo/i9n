'use strict';

const ruin = (input) => {
  return input.split(' ').map(i9n).join(' ');
};

const i9n = (word) => {
  if (typeof word !== 'string' && !(word instanceof String)) {
    return word;
  }
  // The only thing that can have 0 length is empty string.
  // Obviously this should turn into '' + '-2' + ''.
  if (word.length === 0) {
    return '-2';
  }

  // In the case of single character words, duplicate and return early.
  if (word.length === 1) {
    return word + '-1' + word;
  }

  // Check to see that the first and last characters are alphanumeric,
  // otherwise leave them where they are and use the next alphanumeric.
  let first;
  let firstIndex;
  for(let i = 0; i < word.length; i++) {
    firstIndex = i;
    first = word[i];
    if (isAlphaNum(first)) break;
  }

  // End early if there weren't any alphanumeric characters.
  if (word.length - 1 === firstIndex) {
    return word;
  }

  let last;
  let lastIndex;
  for(let i = word.length - 1; i > 0; i--) {
    lastIndex = i + 1; // Used for slicing to get the end of the word.
    last = word[i];
    if (isAlphaNum(last)) break;
  }

  let numStr = (lastIndex - firstIndex - 2).toString();

  return word.slice(0, firstIndex) + first + numStr + last + word.slice(lastIndex);
};

const isAlphaNum = (ch) => /^[a-zA-Z0-9]$/.test(ch);

module.exports = {ruin, i9n};
