import { wordListSort } from "./wordListSort";

const wordList = ["a", "aa", "aba", "er", "abcba"];

describe("word list prep", () => {
  it.only("should remove all words shorter than 3 letters from the word list", () => {
    expect(wordListSort(wordList)).toStrictEqual(["aba", "abcba"]);
  });

  it.todo("should remove all words with double letters from the word list");

  it.todo("should order the words by length and then in alphabetic order");
});
