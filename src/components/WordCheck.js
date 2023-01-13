import React, { useState } from "react";
import { wordListSort } from "./wordListSort";

function WordCheck({ char, unsortedWordList }) {
  const duplicatesFound = findDuplicates(char).length > 0;
  const numbersFound = findNumbers(char);
  const emptyFound = findEmpty(char);

  // Add states??
  const wordList = wordListSort(unsortedWordList);
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

  // Checks if this word has any unused letters
  function usesNewLetters(word) {
    for (let i = 0; i < puzzleLetters.length; i++) {
      if (word.includes(puzzleLetters[i])) return true;
    }
    return false;
  }

  // Returns how many new letters the word uses in the character array
  // Used so that words that use up more individual letters are prioritised
  function numbNewLetters(word) {
    let letterfound = 0;
    for (let i = 0; i < puzzleLetters.length; i++) {
      if (word.includes(puzzleLetters[i])) letterfound++;
    }
    return letterfound;
  }

  //To do: Refactor this function
  function solvePuzzle() {
    while (remainingLetters() === true) {
      let currentBestWord;
      let newLettersUsed = 0;

      // If this is the first matching word in the puzzle
      if (wordChain.length === 0) {
        for (let index = 0; index < wordList.length; index++) {
          let wordToCheck = wordList[index];

          if (checkWord(wordToCheck)) {
            let currentLettersUsed = numbNewLetters(wordToCheck);
            if (currentLettersUsed > newLettersUsed) {
              newLettersUsed = currentLettersUsed;
              currentBestWord = wordToCheck;
            }
          }
        }
        wordChain.push(currentBestWord);
        newLettersUsed = 0;

        console.log("current chain:", wordChain);
      }
      // If this is not the first word the word must start with the last letter of the last word chosen
      else {
        for (let index = 0; index < wordList.length; index++) {
          let wordToCheck = wordList[index];

          let tempWord = wordChain[wordChain.length - 1];

          let containsNewLetters = usesNewLetters(wordToCheck);
          let notAlreadyChosen = !wordChain.includes(wordToCheck);

          // make sure not to choose the same word twice and the word starts with the last letter of the last word
          if (
            notAlreadyChosen &&
            tempWord.slice(-1) === wordToCheck.charAt(0) &&
            // if the word adds more letters to the used letters
            containsNewLetters
          ) {
            if (checkWord(wordToCheck)) {
              // check how many new letters it adds to the game
              let currentLettersUsed = numbNewLetters(wordToCheck);
              if (currentLettersUsed > newLettersUsed) {
                newLettersUsed = currentLettersUsed;
                currentBestWord = wordToCheck;
              }
            }
          }
        }
        wordChain.push(currentBestWord);
        newLettersUsed = 0;

        console.log("current chain:", wordChain);
      }
    }
    return wordChain;
  }

  // todo: change these to setResult()
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
      <ol>
        {result.map((word) => (
          <li key={word}>{word}</li>
        ))}
      </ol>
    );
  }
  return null;
}

export default WordCheck;
