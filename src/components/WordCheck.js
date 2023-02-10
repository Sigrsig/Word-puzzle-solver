import React from "react";
import { wordListSort } from "./wordListSort";

function WordCheck({ char, unsortedWordList }) {
  const duplicatesFound = findDuplicates(char).length > 0;
  const numbersFound = findNumbers(char);
  const emptyFound = findEmpty(char);

  let wordList = wordListSort(unsortedWordList);
  let puzzleLetters = char.join("");
  let wordChain = [];

  const puzzleSides = [
    "top",
    "top",
    "top",
    "right",
    "right",
    "right",
    "bottom",
    "bottom",
    "bottom",
    "left",
    "left",
    "left",
  ];

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

  // Checks if the word passed in is usable in the puzzle
  function checkWord(word) {
    let currentPuzzleSide = "";

    for (let l = 0; l < word.length; l++) {
      for (let i = 0; i < char.length; i++) {
        if (word[l] === char[i] && puzzleSides[i] !== currentPuzzleSide) {
          currentPuzzleSide = puzzleSides[i];
          break;
        } else if (!char[i + 1]) {
          return false;
        }
      }
      if (!word[l + 1]) {
        return true;
      }
    }
  }

  // Checks how many letters we have yet to use
  function remainingLetters() {
    let tempCharArray = puzzleLetters;
    let tempwordChain = wordChain.toString();

    for (let i = 0; i < tempwordChain.length; i++) {
      for (let y = 0; y < tempCharArray.length; y++) {
        if (tempwordChain[i] === tempCharArray[y]) {
          tempCharArray = tempCharArray.replace(tempwordChain[i], "");
        }
      }
    }

    puzzleLetters = tempCharArray;

    if (tempCharArray.length !== 0) {
      console.log("Still letters to use: ", tempCharArray);

      return true;
    } else {
      console.log("All letters used!");
      return false;
    }
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
      if (checkWord(wordList[index])) {
        tempList.push(wordList[index]);
      }
    }
    return tempList;
  }

  function solvePuzzle() {
    wordList = sortWordList(wordList);
    let wordChain = [];

    // Compares all words with one another and if all chosen letters are used up adds them to the word chain
    for (let x = 0; x < wordList.length - 1; x++) {
      for (let y = 0; y < wordList.length - 1; y++) {
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
  } else if (remainingLetters() === true) {
    // Map this and style correctly

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
  return null;
}

export default WordCheck;
