import React from "react";
import { wordListSort } from "./wordListSort";
import { isWordUsable } from "./isWordUsable";

function WordCheck({ char, unsortedWordList }) {
  const duplicatesFound = findDuplicates(char).length > 0;
  const numbersFound = findNumbers(char);
  const emptyFound = findEmpty(char);

  let wordList = wordListSort(unsortedWordList);
  let puzzleLetters = char.join("");
  let wordChain = [];

  // Checking the chosen letters
  function findDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) !== index);
  }
  function findNumbers(arr) {
    return arr.filter((element) => !isNaN(element)) > 0;
  }
  function findEmpty(arr) {
    return arr.includes("") || arr.includes(" ");
  }

  // Returns whether or not all the letters in the character list are used
  function allLettersFound(word) {
    for (let i = 0; i < puzzleLetters.length; i++) {
      if (!word.includes(puzzleLetters[i])) return false;
    }
    return true;
  }

  // Sorts the word list by words that actually work in this case
  function sortWordList(wordList) {
    let tempList = [];
    for (let index = 0; index < wordList.length - 1; index++) {
      if (isWordUsable(wordList[index], puzzleLetters)) {
        tempList.push(wordList[index]);
      }
    }
    return tempList;
  }

  function solvePuzzle() {
    wordList = sortWordList(wordList);
    let wordChain = [];
    console.log("starts solving");
    // Compares all words with one another and if all chosen letters are used up adds them to the word chain
    for (let x = 0; x < wordList.length; x++) {
      for (let y = 0; y < wordList.length; y++) {
        let word1 = wordList[x];
        let word2 = wordList[y];
        if (word1 !== word2 && word1[word1.length - 1] === word2[0]) {
          let tempWord = wordList[x] + wordList[y];
          if (allLettersFound(tempWord)) {
            console.log("All letters found! ", tempWord);
            wordChain.push([`${word1}, ${word2}`]);
          }
        }
      }
    }
    return wordChain;
  }

  if (duplicatesFound) {
    return <div>{"Duplicates found"}</div>;
  } else if (numbersFound) {
    return <div>{"Number found"}</div>;
  } else if (emptyFound) {
    return <div>{"Empty input found"}</div>;
  } else {
    let result = solvePuzzle();
    return (
      <>
        <h2>Solutions:</h2>
        <ol>
          {result.map((word) => (
            <li key={word}>{word}</li>
          ))}
        </ol>
      </>
    );
  }
}

export default WordCheck;
