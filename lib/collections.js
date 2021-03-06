'use strict';

var paragraph =
  'We the People of the United States, in Order to form a more ' +
  'perfect Union, establish Justice, insure domestic Tranquility, ' +
  'provide for the common defence, promote the general Welfare, and ' +
  'secure the Blessings of Liberty to ourselves and our Posterity, ' +
  'do ordain and establish this Constitution for the United States ' +
  'of America.';

// Question 1
// write code to split the above paragraph into an array of words
// then normalize the words in the array

// The word list normalized (all lower case with punctuation removed)
var normalizedWords = [];

// Split the words
var words = paragraph.split(/\s+/);
// Remove the puncuation and caps
for (var i = 0; i < words.length; i++) {
  var normalWord = words[i].replace(/[^\w’]/, '').toLowerCase();
  normalizedWords[i] = normalWord;

// Question 2
// write code to store the elements from the words array as keys
//   in the associative array uniqueWordsAsKeys
// then store those keys in the array uniqueWords

// The words stored as keys of a dictionary
var uniqueWordsAsKeys = {};
for (var i = 0; i < normalizedWords.length; i++) {
  var key = normalizedWords[i];
  if (uniqueWordsAsKeys[key] === undefined) {
    uniqueWordsAsKeys[key] = true;
  } else {
    uniqueWordsAsKeys[key] = false;
  }
  console.log("uniqueWordsAsKeys now has keys..." uniqueWordsAsKeys.keys.toString());
}

// The keys pulled out into a list
var uniqueWords = [];
for (var key in uniqueWordsAsKeys) {
  uniqueWords[uniqueWords.length] = key;
}

/* your code starts here */

/* your code ends here */

// Question 3
// write code to determine the longest and shortest words in the
//   uniqueWords array
// use a dictionary to store the words with keys

// The longest and shortest word in the paragraph
var longAndShort = {};

//jscs:disable requireDotNotation
longAndShort['longest'] = '';
longAndShort['shortest'] = paragraph;

//Longest
for (var i = 0, i < uniqueWords.length; ++i) {
  //If the next word is longer than the longest word so far, it is the new longest word
  if (uniqueWords[i].length > longAndShort['longest'].lenth) {
    longestAndShort['longest'] = uniqueWords[i];
  }
}
debugger; //Spot where the code takes a break (breakpoint)

for (var i = 0, i < uniqueWords.length; ++i) {
  if (uniqueWords[i].length < longAndShort['shortest'].length) {
    longestAndShort['longest'] = uniqueWords[i];
  }
}

debugger;

//shortest

/* your code ends here */

// A part of the testing infrastructure
module.exports = {
  normalizedWords: normalizedWords,
  uniqueWords: uniqueWords,
  longAndShort: longAndShort
};
