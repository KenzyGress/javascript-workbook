"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function translateToPigLatin(word) {
  // GOAL
  // Create if/else block based on the 4 tests below which are: words starting with vowels and words that don't start with vowels. The words should also be properly formatted prior to being checked in the if/else block. In other words, performs a substring.trim() on the word first.

  // Step 1
  // Create the if block for the words that start with a vowel.
  // Create a dictionary or collection (e.g, like an index), that contains all of the vowels. a, e, i, o, u. This should be a constant since it never changes.
  // Then, check the word parameter to see if the first letter is contained in the index of vowels that we made above.
  // If the first letter *IS* a vowel, then write the logic for how the word will be converted based on the vowel test below. In this case, the word should be appended with the "yay" string at the end of the word.

  // Step 2
  // Create the "else" statement for the words that do not start with vowels
  // Check the word using the vowel dictionary and find the first vowel that appears in the word. Then:
  // * Substring everything starting at the vowel and after, and move it to the front. This is the prefix.
  // * Append "ay" at the end of the word. This will be a constant only for this else block, and will be the suffix.
  //
  // You'll have three variables to build and return as the translated word. Example: Create
  // * Prefix - eate
  // * Body - cr
  // * Suffix - ay
  // In other words, your returned word would look like "return prefix + body + suffix"

  let newWord = word.trim().toLowerCase();
  let vowels = "aeiou";

  function vowelIsDetected(newWord) {
    for (let i = 0; i < newWord.length; i++) {
      if (vowels.indexOf(newWord[i]) !== -1) {
        return i;
      }
    }
  }

  let firstVowel = vowelIsDetected(newWord);
  if (firstVowel > 0) {
    return newWord.slice(firstVowel) + newWord.slice(0, firstVowel) + "ay";
  } else {
    return newWord + "yay";
  }
}

function getPrompt() {
  rl.question("word ", answer => {
    console.log(translateToPigLatin(answer));
    getPrompt();
  });
}

// Tests

if (typeof describe === "function") {
  describe("#translateToPigLatin()", () => {
    it("should translate a simple word", () => {
      assert.equal(translateToPigLatin("car"), "arcay");
      assert.equal(translateToPigLatin("dog"), "ogday");
    });
    it("should translate a complex word", () => {
      assert.equal(translateToPigLatin("create"), "eatecray");
      assert.equal(translateToPigLatin("valley"), "alleyvay");
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(translateToPigLatin("egg"), "eggyay");
      assert.equal(translateToPigLatin("emission"), "emissionyay");
    });
    it("should lowercase and trim word before translation", () => {
      assert.equal(translateToPigLatin("HeLlO "), "ellohay");
      assert.equal(translateToPigLatin(" RoCkEt"), "ocketray");
    });
  });
} else {
  getPrompt();
}
