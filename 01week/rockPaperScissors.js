"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function rockPaperScissors(hand1, hand2) {
  //test for a tie
  if (hand1 === hand2) {
    return "It's a tie!";
  }

  //test for rock beating scissors
  if (hand1 === "rock") {
    if (hand2 === "scissors") {
      return "Hand one wins!";
    } else {
      return "Hand two wins!";
    }
  }
  //test for paper beating rock
  if (hand1 === "paper") {
    if (hand2 === "rock") {
      return "Hand one wins!";
    } else {
      return "Hand two wins!";
    }
  }
  //test for scissors beating paper
  if (hand1 === "scissors") {
    if (hand2 === "paper") {
      return "Hand one wins!";
    } else {
      return "Hand two wins!";
    }
  }
}

function getPrompt() {
  rl.question("hand1: ", answer1 => {
    rl.question("hand2: ", answer2 => {
      console.log(rockPaperScissors(answer1, answer2));
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === "function") {
  describe("#rockPaperScissors()", () => {
    it("should detect a tie", () => {
      assert.equal(rockPaperScissors("rock", "rock"), "It's a tie!");
      assert.equal(rockPaperScissors("paper", "paper"), "It's a tie!");
      assert.equal(rockPaperScissors("scissors", "scissors"), "It's a tie!");
    });
    it("should detect which hand won", () => {
      assert.equal(rockPaperScissors("rock", "paper"), "Hand two wins!");
      assert.equal(rockPaperScissors("paper", "scissors"), "Hand two wins!");
      assert.equal(rockPaperScissors("rock", "scissors"), "Hand one wins!");
    });
    it("should scrub input to ensure lowercase with trimmed whitepace", () => {
      assert.equal(rockPaperScissors("rock", " paper"), "Hand two wins!");
      assert.equal(rockPaperScissors("paper", "scissors"), "Hand two wins!");
      assert.equal(rockPaperScissors("rock", "scissors"), "Hand one wins!");
    });
    it("should detect an abbreviation for rock, paper, scissors", () => {
      assert.equal(rockPaperScissors("r", "r"), "It's a tie!");
      assert.equal(rockPaperScissors("p", "p"), "It's a tie!");
      assert.equal(rockPaperScissors("s", "s"), "It's a tie!");
      assert.equal(rockPaperScissors("r", "s"), "Hand one wins!!");
      assert.equal(rockPaperScissors("s", "p"), "Hand one wins!!");
      assert.equal(rockPaperScissors("p", "r"), "Hand one wins!!");
      assert.equal(rockPaperScissors("r", "p"), "Hand two wins!!");
      assert.equal(rockPaperScissors("p", "s"), "Hand two wins!!");
      assert.equal(rockPaperScissors("s", "r"), "Hand two wins!!");
    });
    it("should detect an unknown option", () => {
      assert.equal(rockPaperScissors("rock", "volcano"), "It doesn't work!");
      assert.equal(rockPaperScissors("kazoo", "paper"), "It doesn't work!");
      assert.equal(
        rockPaperScissors("scissors", "alligator"),
        "It doesn't work!"
      );
    });
  });
} else {
  getPrompt();
}
